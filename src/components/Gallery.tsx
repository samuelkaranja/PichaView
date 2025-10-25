import React from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../Data";

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const filteredGallery = Images.filter((f) => f.tag === "gallery");

  const handleClick = (id: number, tag: string) => {
    navigate(`/photo/${tag}/${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredGallery.map((pic) => (
          <div
            key={pic.id}
            onClick={() => handleClick(pic.id, pic.tag)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-102 transition-transform"
          >
            <img src={pic.image} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
