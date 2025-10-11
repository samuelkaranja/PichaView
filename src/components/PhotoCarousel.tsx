import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Images } from "../Data";

// const images = [
//   "https://picsum.photos/800/600?random=1",
//   "https://picsum.photos/800/600?random=2",
//   "https://picsum.photos/800/600?random=3",
//   "https://picsum.photos/800/600?random=4",
//   "https://picsum.photos/800/600?random=5",
//   "https://picsum.photos/800/600?random=6",
//   "https://picsum.photos/800/600?random=7",
//   "https://picsum.photos/800/600?random=8",
//   "https://picsum.photos/800/600?random=9",
// ];

const PhotoCarousel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const startIndex = id ? parseInt(id, 10) : 0;

  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 text-white"
        onClick={() => {
          if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
      >
        <X size={32} className="hover:cursor-pointer" />
      </button>

      {/* Image */}
      <img
        src={Images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
      />

      {/* Controls */}
      <div className="absolute inset-y-0 left-6 flex items-center">
        <button
          onClick={prevImage}
          className="text-white p-2 hover:cursor-pointer"
        >
          <ChevronLeft size={40} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-6 flex items-center">
        <button
          onClick={nextImage}
          className="text-white p-2 hover:cursor-pointer"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {Images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
