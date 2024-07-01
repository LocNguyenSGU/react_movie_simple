import React, { useEffect } from "react";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { CiSearch } from "react-icons/ci";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=eadb294eb8e8e288d6c33cdd140fdde2`,
    fetcher
  );

  const movies = data?.results || [];
  console.log("MOMMM: ", movies);

  return (
    <>
    <div className="flex items-center page-container mb-5">
        <input className="bg-slate-500 w-full px-4 py-2 outline-none border-none text-white" type="search" placeholder="Search here"/>
        <button className="bg-primary text-white w-auto px-2 h-[40px]"><CiSearch className="font-medium text-3xl"></CiSearch></button>
    </div>
      <div className="grid grid-cols-4 gap-8 page-container">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </>
  );
};

export default MoviePage;
