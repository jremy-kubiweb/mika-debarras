import { track as vercelTrack } from "@vercel/analytics";

type TrackWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as TrackWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
  w.gtag?.("event", name, params);
  try {
    vercelTrack(name, params);
  } catch {
    // Vercel Analytics indisponible (ex. en local)
  }
}
