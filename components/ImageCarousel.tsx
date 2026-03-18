"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
  autoPlayMs?: number;
  aspectRatio?: string;
  sizes?: string;
}

export default function ImageCarousel({
  slides,
  autoPlayMs = 4500,
  aspectRatio = "aspect-[16/7]",
  sizes = "100vw",
}: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [paused, next, autoPlayMs, slides.length]);

  if (!slides.length) return null;

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl group bg-gray-100`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes={sizes}
            className="object-cover"
            priority={i === 0}
          />
          {slide.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
              <p className="text-white text-sm font-medium">{slide.caption}</p>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
