import React from "react";
import { useParams } from "react-router-dom";
import { Images } from "../Data";

const Photo: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const photoFilter = Images.find((pic) => pic.id === Number(id));

  return (
    <div className="flex justify-center py-10">
      <img
        className="w-170 h-150 rounded-lg object-cover"
        src={photoFilter?.image}
        alt=""
      />
    </div>
  );
};

export default Photo;
