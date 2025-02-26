'use client'
import { useState } from "react";

export default function CarouselButton({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  return (
    <>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex gap-8 min-w-full p-6 text-center bg-white"
          >
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-40rem] h-[24rem] rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-3xl font-bold">{slide.name}</h1>
              <p className="text-gray-600 text-xl">{slide.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-[37%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-[50%] shadow-md hover:bg-gray-900"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-[37%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-[50%] shadow-md hover:bg-gray-900"
      >
        &#10095;
      </button>
    </>
  );
}
