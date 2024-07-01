import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailPage = () => {
  const { movieID } = useParams();
  console.log("Movie-id: ", movieID);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
    fetcher
  );

  if (error) {
    console.error("Failed to fetch movie details:", error);
    return <div>Failed to load movie details</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log("Movie-detail: ", data);

  return (
    <>
      <div className="page-container h-[600px] relative bg-blue-400 rounded-lg">
        <img
          className="object-cover w-full h-full rounded-lg absolute top-0 left-0"
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
        />
        <div className="h-[600px] inset-0 bg-black rounded-lg opacity-60"></div>
        <img
          className="object-cover w-1/2 h-1/2 absolute rounded-lg mx-auto -translate-y-2/4 translate-x-2/4"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.title}
        />
      </div>
      <h1 className="title text-white font-bold text-2xl mt-[210px] text-center">
        {data.title}
      </h1>
      <div className="flex items-center justify-center gap-4 mt-4">
        {data.genres.map((item) => (
          <span
            key={item.id}
            className="text-red-300 rounded-lg px-4 py-2 border border-red-400"
          >
            {item.name}
          </span>
        ))}
      </div>
      <p className="text-white max-w-[600px] mx-auto leading-relaxed text-center mt-4 pb-10">
        {data.overview}
      </p>
      <MovieVideos movieID={movieID}></MovieVideos>
      <MovieRelate movieID={movieID}></MovieRelate>
    </>
  );
};

function MovieVideos({ movieID }) {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`,
    fetcher
  );
  console.log("data video: ", data);

  if (error) {
    console.error("Failed to fetch movie videos:", error);
    return <div>Failed to load movie videos</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="py-10 page-container">
        {data.results.slice(0, 3).map((item) => (
          <div key={item.id}>
            <span className="text-white font-semibold p-3 bg-primary">{item.name}</span>
            <iframe
            className="mb-6"
              key={item.id}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}
function MovieRelate({movieID}) {
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${apiKey}`,
        fetcher
      );
      console.log("data smilar: ", data);
    
      if (error) {
        console.error("Failed to fetch movie videos:", error);
        return <div>Failed to load movie videos</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }

    return (<>
    <div className="movie-list page-container pb-10">
        <h2 className="text-white text-2xl mb-3">Movie similer</h2>
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {data.results.length > 0 &&
            data.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>);
}

export default MovieDetailPage;
