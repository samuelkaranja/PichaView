import React from "react";
import { Engagement } from "../Data";

const Engagements: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {Engagement.map((eg) => (
          <div
            key={eg.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow hover:scale-102 transition-transform"
          >
            <img src={eg.image} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engagements;
