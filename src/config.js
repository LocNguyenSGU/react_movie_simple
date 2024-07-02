export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "eadb294eb8e8e288d6c33cdd140fdde2";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndPoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieID) => `${tmdbEndPoint}/${movieID}?api_key=${apiKey}`,
  getMovieDetailVideos: (movieID) =>
    `${tmdbEndPoint}/${movieID}/videos?api_key=${apiKey}`,
  getMovieDetailSimilar: (movieID) =>
    `${tmdbEndPoint}/${movieID}/similar?api_key=${apiKey}`,
  getMoviePopular: (page) =>
    `${tmdbEndPoint}/popular?api_key=${apiKey}&page=${page}`,
  getMoiveWithSerch: (filterDebounce, page) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${page}`,
  imgOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`

};
