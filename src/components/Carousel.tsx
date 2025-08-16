"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./core/Container";

const images = [
  "/images/logo.png",
  "/images/logo.png",
  "/images/logo.png",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <div aria-label="carousel section" className="relative h-40 flex items-center justify-center">
        <div className="h-full w-auto flex items-center justify-center relative">
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            width={300}
            height={160}
            className="h-full w-auto object-cover rounded"
            priority
          />

          {/* left-side overlay text (no background) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-left text-white max-w-xs">
            <h2 className="text-lg font-semibold drop-shadow-md">Head</h2>
            <p className="text-sm mt-1 opacity-95 drop-shadow-sm">Subheading</p>
          </div>
        </div>
      </div>
  <div className="flex justify-end mt-2 gap-2 w-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </Container>
  );
}