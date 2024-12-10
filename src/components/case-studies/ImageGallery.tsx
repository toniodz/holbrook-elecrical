import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    url: string;
    caption: string;
  }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {images.map((image, index) => (
          <button
            key={image.url}
            onClick={() => {
              setCurrentIndex(index);
              setIsModalOpen(true);
            }}
            className="relative group aspect-video overflow-hidden rounded-lg"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm">View Image</span>
            </div>
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={36} />
          </button>

          <div className="max-w-4xl mx-auto px-4">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-h-[80vh] w-auto mx-auto"
            />
            <p className="text-white text-center mt-4">
              {images[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}