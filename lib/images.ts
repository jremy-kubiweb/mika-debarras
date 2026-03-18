const px = (id: number, w = 800, h = 500) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const IMG = {
  hero:  px(2168227, 1400, 700),
  ville: px(3125905,  800, 500),
  team:  px(7464372,  800, 800),

  heroes: {
    accueil:      px(2168227,  1400, 700),
    services:     px(30630960, 1400, 700),
    realisations: px(7534168,  1400, 700),
    aPropos:      px(2375042,  1400, 700),
    zones:        px(7018400,  1400, 700),
    ville:        px(9998751,  1400, 700),
    contact:      px(6555465,  1400, 700),
  },

  contactSide: px(2168227, 800, 500),

  services: {
    "vide-maison":                px(2168227, 800, 500),
    "vide-appartement":           px(6555465, 800, 500),
    "vide-cave":                  px(439227,  800, 500),
    "vide-grenier-professionnel": px(7534168, 800, 500),
    "succession-heritage":        px(1411446, 800, 500),
    "debarras-bureau":            px(7018400, 800, 500),
  } as Record<string, string>,

  avant: [
    px(30630960, 600, 400),
    px(6555465,  600, 400),
    px(8454342,  600, 400),
    px(9998751,  600, 400),
    px(7534168,  600, 400),
    px(7018400,  600, 400),
  ],

  apres: [
    px(3125905, 600, 400),
    px(803908,  600, 400),
    px(8146144, 600, 400),
    px(5691496, 600, 400),
    px(7031616, 600, 400),
    px(6480211, 600, 400),
  ],

  galerie: [
    px(2375042, 1200, 700),
    px(30630960, 1200, 700),
    px(6555465,  1200, 700),
    px(3125905,  1200, 700),
    px(1411446,  1200, 700),
    px(8146144,  1200, 700),
  ],
};
