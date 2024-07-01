import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=eadb294eb8e8e288d6c33cdd140fdde2`,
    fetcher
  );

  if (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load</div>;
  }
  
  if (!data) {
    return <div>Loading...</div>;
  }

  const movies = data.results || [];
  console.log("upComing: ", movies);

  return (
    <section className="banner h-[480px] page-container mb-10">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem movie={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ movie }) => {
  return (
    <div>
      <div className="w-full h-full rounded-lg relative">
        <img
          className="w-full h-[480px] object-cover rounded-lg"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
        <div className="absolute left-5 bottom-5">
          <h2 className="text-white font-bold text-3xl mb-3">
            {movie.title}
          </h2>
          <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md text-white">
              Aventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md text-white">
              Action
            </span>
            <span className="py-2 px-4 border border-white rounded-md text-white">
              Aventure
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-primary text-white">
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
