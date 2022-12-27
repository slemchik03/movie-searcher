import { FC } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../utils/getMovies";

interface Props extends IMovie {}

const MovieItem: FC<Props> = ({ title, backdrop_path, poster_path, id }) => {
  return (
    <Link to={"/movie/" + id}>
      <div className="grid cursor-pointer gid-flow-row justify-center items-center gap-4 text-white text-center">
        <img
          className="h-[250px] object-fill rounded-xl "
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          alt=""
        />
        <p className="font-semibold text-[16px]">{title}</p>
      </div>
    </Link>
  );
};

export default MovieItem;
