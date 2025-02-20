"use client";

import { useState } from "react";
import { DUMMY as SLIDES } from "@/dummy";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }

  return (
    <>
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="flex gap-8 min-w-full p-6 text-center bg-white"
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-40rem] h-[24rem] rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-3xl font-bold">{slide.title}</h1>
                <p className="text-gray-600 text-xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
        >
          &#10095;
        </button>
      </div>
    </>
  );
}
