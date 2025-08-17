"use client";
import React, { useEffect, useState } from "react";
import Container from "./core/Container";

type Slide = { image: string; title?: string; subtitle?: string };

export default function Carousel({ apiUrl = "http://127.0.0.1:8000/carousel" }: { apiUrl?: string }) {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((payload) => {
        if (!mounted) return;
        console.debug("Carousel payload:", payload);

        // The API returns { statusCode, data: [...] , message }
        let items: unknown[] = [];
        if (Array.isArray(payload)) items = payload;
        else if (payload && typeof payload === "object") {
          const p = payload as Record<string, unknown>;
          if (Array.isArray(p.data as unknown)) items = p.data as unknown[];
          else if (Array.isArray(p.results as unknown)) items = p.results as unknown[];
          else if (Array.isArray(p.slides as unknown)) items = p.slides as unknown[];
        }

        const normalized = (items || [])
          .map((it) => {
            const obj = it as Record<string, unknown>;
            return {
              image: String(obj.imageUrl ?? obj.image ?? obj.src ?? ""),
              title: String(obj.heading ?? obj.title ?? ""),
              subtitle: String(obj.subheading ?? obj.subtitle ?? ""),
            } as Slide;
          })
          .filter((s) => !!s.image);

        setSlides(normalized);
      })
      .catch((err) => {
        console.warn("Carousel fetch failed:", err);
        setSlides([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [apiUrl]);

  // auto advance every 5s
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const id = setInterval(() => setCurrent((p) => (p >= slides.length - 1 ? 0 : p + 1)), 5000);
    return () => clearInterval(id);
  }, [slides]);

  const active = slides.length > 0 ? slides[current] : null;

  return (
    <div className="w-full">
      <div className="relative w-full bg-gray-900">
        {/* Hero image */}
        <div className="w-full h-[520px] md:h-[520px] relative overflow-hidden">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">Loading...</div>
          ) : active ? (
            <>
              {/* background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.image} alt={active.title ?? "slide"} className="absolute inset-0 w-full h-full object-cover" />

              {/* left text overlay */}
              <div className="absolute inset-0 flex items-center">
                <Container>
                  <div className="max-w-2xl text-left text-white">
                    <p className="text-sm tracking-wider uppercase mb-4">Study Abroad</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">{active.title}</h1>
                    <p className="mt-4 text-lg md:text-xl opacity-95">{active.subtitle}</p>

                    <div className="mt-8 flex items-center gap-6">
                      <button className="px-6 py-3 rounded border border-white text-white hover:opacity-90">
                        All Services ↗
                      </button>

                      <a href="tel:+919518420838" className="flex items-center gap-3">
                        <span className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-white">📞</span>
                        <div className="text-white">
                          <div className="text-sm">Call Us Now</div>
                          <div className="font-bold">+91 9518420838</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Container>
              </div>

              {/* dots bottom-right */}
              <div className="absolute right-8 bottom-8 flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-8 h-4 rounded-full transition-all ${i === current ? "bg-white" : "bg-amber-600/80"}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">No slides available</div>
          )}
        </div>
      </div>
    </div>
  );
}
