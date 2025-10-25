import React from "react";
import { Images } from "../Data";
import { useNavigate } from "react-router-dom";

const Venues: React.FC = () => {
  const navigate = useNavigate();

  const filteredVenues = Images.filter((f) => f.tag === "venue");

  const handleClick = (id: number, tag: string) => {
    navigate(`/photo/${tag}/${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredVenues.map((v) => (
          <div
            key={v.id}
            onClick={() => handleClick(v.id, v.tag)}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-102 transition-transform"
          >
            <img src={v.image} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
