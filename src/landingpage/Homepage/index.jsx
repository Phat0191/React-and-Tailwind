import React from "react";
import { moviesData } from "./movieData";
import MovieCard from "./movieCard";

const Homepage = () => {
  return (
    <>
      <h3 className=" border-b border-[#40465c] mt-12 mb-6 pb-4 text-2xl">
        Trending
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
        {moviesData.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-110 transition ease-out duration-500">
          Load more
        </button>
      </div>
    </>
  );
};

export default Homepage;
