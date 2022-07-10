import React from "react";
import { FaRegClock } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const { src, title, main, runtime } = movie;
  return (
    <div className="card">
      <img src={src} className="w-full" />
      <div className="p-4 text-white bg-[#40465c] h-full">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="flex justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-1 min-w-[25%]">
        <FaRegClock />
        &nbsp;
        <p className="pb-1">{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
