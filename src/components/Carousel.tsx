"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./core/Container";

const images = ["/images/logo.png", "/images/logo.png", "/images/logo.png"];

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
    <div className="bg-gray-300 py-4">
      <Container>
        <div aria-label="carousel section" className="relative flex items-center justify-center">
          <div className="w-108 h-72 relative rounded-lg ">
            <Image
              src={images[current]}
              alt={`Slide ${current + 1}`}
              fill
              className="object-fit"
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
              className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-500" : "bg-gray-200"} transition-all duration-200`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
