import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { CiSearch } from "react-icons/ci";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMoviePopular(page));
  const filterDebounce = useDebounce(filter, 500);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMoiveWithSerch(filterDebounce, page));
    } else {
      setUrl(tmdbAPI.getMoviePopular(page));
    }
  }, [filterDebounce, page]);

  const { data, error } = useSWR(url, fetcher);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const handlePageChange = (event) => {
    const newPage = event.selected + 1; // ReactPaginate starts at page 0, so we need to increment by 1
    setPage(newPage);
  };

  const movies = data?.results || [];
  const total_pages = data?.total_pages || 0;

  if (error) {
    return <div>Failed to load movies</div>;
  }

  return (
    <>
      <div className="flex items-center page-container mb-5">
        <input
          onChange={handleFilterChange}
          value={filter}
          className="bg-slate-500 w-full px-4 py-2 outline-none border-none text-white"
          type="search"
          placeholder="Search here"
        />
        <button className="bg-primary text-white w-auto px-2 h-[40px]">
          <CiSearch className="font-medium text-3xl" />
        </button>
      </div>
      {!data ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="grid grid-cols-4 gap-8 page-container">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <Skeleton height={200} />
                  <Skeleton count={3} />
                </div>
              ))}
          </div>
        </SkeletonTheme>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-8 page-container">
            {movies.length > 0 &&
              movies.map((item) => <MovieCard key={item.id} item={item} />)}
          </div>
          {total_pages > 1 && (
            <ReactPaginate
              previousLabel={<FaChevronLeft />}
              nextLabel={<FaChevronRight />}
              breakLabel="..."
              pageCount={total_pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              forcePage={page - 1} // Force ReactPaginate to update the active page
              containerClassName="paginate flex items-center justify-center gap-2 mt-10 mb-10"
              pageClassName="paginate-item cursor-pointer w-auto h-8 flex items-center justify-center rounded"
              previousClassName="paginate-item cursor-pointer p-2 bg-cyan-200 rounded"
              nextClassName="paginate-item cursor-pointer p-2 bg-cyan-200 rounded"
              breakClassName="paginate-item cursor-pointer w-8 h-8 flex items-center justify-center rounded"
              activeClassName="bg-primary text-white"
            />
          )}
          {data.results.length === 0 && (
            <p className="text-white text-center mt-10">Not found</p>
          )}
        </>
      )}
    </>
  );
};

export default MoviePage;
