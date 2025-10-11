import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../Data";

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:ml-64">
      {Images.map((pic) => (
        <Link key={pic.id} to={`/photo/${pic.id}`}>
          <img
            src={pic.image}
            alt={`gallery-${pic.image}`}
            className="w-full h-100 object-cover rounded-lg shadow hover:opacity-80 transition"
          />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
