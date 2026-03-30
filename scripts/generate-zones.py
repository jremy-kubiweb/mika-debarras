import json, sys, math, unicodedata, re
import urllib.request

def haversine(lat1, lon1, lat2, lon2):
    R = 6371
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon/2)**2
    return R * 2 * math.asin(math.sqrt(a))

def slugify(name):
    name = unicodedata.normalize('NFD', name)
    name = ''.join(c for c in name if unicodedata.category(c) != 'Mn')
    name = name.lower().replace(' ', '-').replace("'", '-').replace('/', '-')
    name = re.sub(r'[^a-z0-9-]', '', name)
    name = re.sub(r'-+', '-', name).strip('-')
    return name

# Irigny coordinates
IRIGNY_LAT = 45.6697
IRIGNY_LON = 4.8194
RAYON_KM = 40

# 1. Métropole de Lyon (EPCI 200046977)
data = []
print("Fetching Metropole de Lyon...")
url = "https://geo.api.gouv.fr/communes?codeEpci=200046977&fields=nom,population,codesPostaux,centre,surface&limit=200"
with urllib.request.urlopen(url) as r:
    batch = json.loads(r.read().decode())
    data.extend(batch)
    print(f"  -> {len(batch)} communes")

# 2. Dept 69 hors Métropole (communes non-Métropole du Rhône)
print("Fetching dept 69 (hors Metropole)...")
url = "https://geo.api.gouv.fr/communes?codesDepartements=69&fields=nom,population,codesPostaux,centre,surface&limit=500"
with urllib.request.urlopen(url) as r:
    batch = json.loads(r.read().decode())
    data.extend(batch)
    print(f"  -> {len(batch)} communes")

# 3. Départements voisins
DEPTS = ["01", "38", "42", "71"]
for dept in DEPTS:
    url = f"https://geo.api.gouv.fr/communes?codesDepartements={dept}&fields=nom,population,codesPostaux,centre,surface&limit=1000"
    print(f"Fetching dept {dept}...")
    with urllib.request.urlopen(url) as response:
        batch = json.loads(response.read().decode())
        data.extend(batch)
        print(f"  -> {len(batch)} communes")

print(f"Total recu: {len(data)}")

# Deduplicate by INSEE code
seen = set()
unique_data = []
for c in data:
    code = c.get('code', '')
    if code not in seen:
        seen.add(code)
        unique_data.append(c)
data = unique_data
print(f"Apres deduplication: {len(data)}")

dans_rayon = []
for c in data:
    if 'centre' not in c:
        continue
    coords = c['centre']['coordinates']
    dist = haversine(IRIGNY_LAT, IRIGNY_LON, coords[1], coords[0])
    if dist <= RAYON_KM:
        pop = c.get('population') or 0
        cp = c.get('codesPostaux', [''])[0]
        slug = slugify(c['nom'])
        dans_rayon.append({
            'slug': slug,
            'nom': c['nom'],
            'codePostal': cp,
            'population': pop,
            'surface': round(c.get('surface', 0) / 100, 1),  # ha -> km2
            'distance_km': round(dist, 1),
            'departement': c.get('code', '')[:2],
            'lat': coords[1],
            'lon': coords[0],
        })

dans_rayon.sort(key=lambda x: x['distance_km'])
print(f"Communes dans {RAYON_KM}km: {len(dans_rayon)}")

# Check for duplicates
slugs = [c['slug'] for c in dans_rayon]
dupes = [s for s in slugs if slugs.count(s) > 1]
if dupes:
    print(f"Doublons de slugs: {set(dupes)}")

# Deduplicate slugs (keep first occurrence)
seen_slugs = set()
unique_zones = []
for c in dans_rayon:
    if c['slug'] not in seen_slugs:
        seen_slugs.add(c['slug'])
        unique_zones.append(c)
    else:
        c['slug'] = c['slug'] + '-' + c['codePostal'].replace(' ', '')
        seen_slugs.add(c['slug'])
        unique_zones.append(c)
dans_rayon = unique_zones

# Calculate voisines: 5 closest communes for each commune
def get_voisines(commune, all_communes, n=5):
    others = [(haversine(commune['lat'], commune['lon'], c['lat'], c['lon']), c['slug'])
              for c in all_communes if c['slug'] != commune['slug']]
    others.sort(key=lambda x: x[0])
    return [s for _, s in others[:n]]

for c in dans_rayon:
    c['voisines'] = get_voisines(c, dans_rayon)

# Show first 10
for c in dans_rayon[:10]:
    print(f"  {c['distance_km']}km - {c['nom']} ({c['codePostal']}) pop:{c['population']}")

# Generate zones.ts content
lines = []
lines.append("export interface Zone {")
lines.append("  slug: string;")
lines.append("  nom: string;")
lines.append("  codePostal: string;")
lines.append("  description: string;")
lines.append("  population?: number;")
lines.append("  surface?: number;")
lines.append("  distanceIrigny?: number;")
lines.append("  voisines: string[];")
lines.append("}")
lines.append("")
lines.append("export const zones: Zone[] = [")

for c in dans_rayon:
    nom = c['nom']
    slug = c['slug']
    cp = c['codePostal']
    pop = c['population']
    surface = c['surface']
    dist = c['distance_km']
    desc = f"Débarras et vide maison professionnels à {nom} ({cp}). MiKa Débarras intervient à {nom} pour tous vos besoins : vide cave, vide grenier, succession. Devis gratuit sous 24h."
    nom_esc = nom.replace("'", "\\'")
    desc_esc = desc.replace("'", "\\'")

    lines.append("  {")
    lines.append(f"    slug: \"{slug}\",")
    lines.append(f"    nom: \"{nom_esc}\",")
    lines.append(f"    codePostal: \"{cp}\",")
    lines.append(f"    description: \"{desc_esc}\",")
    if pop:
        lines.append(f"    population: {pop},")
    if surface:
        lines.append(f"    surface: {surface},")
    lines.append(f"    distanceIrigny: {dist},")
    voisines_str = ', '.join(f'"{v}"' for v in c.get('voisines', []))
    lines.append(f"    voisines: [{voisines_str}],")
    lines.append("  },")

lines.append("];")
lines.append("")
lines.append("export function getZoneBySlug(slug: string): Zone | undefined {")
lines.append("  return zones.find((z) => z.slug === slug);")
lines.append("}")
lines.append("")
lines.append("export function getVoisines(zone: Zone): Zone[] {")
lines.append("  return zone.voisines")
lines.append("    .map((slug) => zones.find((z) => z.slug === slug))")
lines.append("    .filter((z): z is Zone => z !== undefined);")
lines.append("}")
lines.append("")

output_path = "data/zones.ts"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"\nFichier genere: {output_path} avec {len(dans_rayon)} zones")
