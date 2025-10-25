import React from "react";
import { Images } from "../Data";
import { useNavigate } from "react-router-dom";

const Favorites: React.FC = () => {
  const navigate = useNavigate();

  const filteredFavorites = Images.filter((f) => f.tag === "favorite");

  const handleClick = (id: number, tag: string) => {
    navigate(`/photo/${tag}/${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredFavorites.map((fv) => (
          <div
            key={fv.id}
            onClick={() => handleClick(fv.id, fv.tag)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-102 transition-transform"
          >
            <img src={fv.image} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
