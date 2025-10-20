import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Images } from "../Data";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const PhotoView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const imageIndex = Images.findIndex((img) => img.id === Number(id));
    if (imageIndex !== -1) setCurrentIndex(imageIndex);
  }, [id]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Images.length) % Images.length);
  };

  const currentImage = Images[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
      >
        <FaTimes size={20} />
      </button>

      <div className="flex items-center justify-center w-full h-[80vh] relative">
        {/* Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-6 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Image */}
        <img
          src={currentImage.image}
          className="max-h-full max-w-full object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />

        {/* Next */}
        <button
          onClick={handleNext}
          className="absolute right-6 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PhotoView;
