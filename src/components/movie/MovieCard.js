import { useNavigate } from "react-router-dom";

const MovieCard = ({item}) => {
    const {title, release_date, vote_average, backdrop_path, id} = item
    const navigate = useNavigate()
  return (
    <>
      <div className="movie-card rounded-lg bg-slate-800 p-4">
        <img
          className="w-full h-[250px] object-cover rounded-lg mb-3"
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        ></img>
        <h3 className="text-white font-bold text-xl mb-2 text-nowrap overflow-hidden">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 text-white mb-3">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average.toFixed(2)}</span>
        </div>
        <button className="text-white bg-primary w-full font-bold rounded-lg p-3" 
        onClick={()=> navigate(`/movies/${id}`)}
        >
          Watch now
        </button>
      </div>
    </>
  );
};
export default MovieCard;
