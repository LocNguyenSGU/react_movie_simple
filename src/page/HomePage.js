import React from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  return (
    <>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white font-bold text-xl mb-4">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white font-bold text-xl mb-4">
          Popular
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white font-bold text-xl mb-4">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
    </>
  );
};

export default HomePage;
