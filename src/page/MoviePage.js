import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { CiSearch } from "react-icons/ci";
import MovieCard from "../components/movie/MovieCard";
import { apiKey, fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  const filterDebounce = useDebounce(filter, 500);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`);
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    }
  }, [filterDebounce]);

  const { data, error } = useSWR(url, fetcher);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const movies = data?.results || [];

  if (error) {
    return <div>Failed to load movies</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center page-container mb-5">
        <input
          onChange={handleFilterChange}
          className="bg-slate-500 w-full px-4 py-2 outline-none border-none text-white"
          type="search"
          placeholder="Search here"
        />
        <button className="bg-primary text-white w-auto px-2 h-[40px]">
          <CiSearch className="font-medium text-3xl" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 page-container">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default MoviePage;
