import { FC } from "react";
import { IMovie } from "../../utils/getMovies";
import SameMovies from "./SameMovies";

interface Props extends IMovie {}

const MovieItem: FC<Props> = ({
  title,
  backdrop_path,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  adult,
  overview,
  id
}) => {
  return (
    <div className="text-white max-w-[1200px] mx-auto px-4 pt-[120px]">
      <div className="grid grid-flow-row xl:grid-cols-[3fr,1fr] xl:justify-between">
        <div>
          <h1 className="text-[32px] pb-8">{title}</h1>
          <div className="grid grid-cols-[minmax(0,350px)_minmax(0,250px)] grid-rows-[100px_200px] gap-8">
            <img
              className="rounded-xl h-[379px] object-fill"
              src={`https://image.tmdb.org/t/p/original${
                backdrop_path || poster_path
              }`}
              alt="Movie image"
            />
            <div className="grid grid-flow-row gap-3">
              <div className="grid grid-flow-row gap-1">
                <span className="font-semibold text-[20px]">Release Date</span>
                <p className="text-[16px] text-[#868686]">{release_date}</p>
              </div>
              <div className="grid grid-flow-row gap-1">
                <span className="font-semibold text-[20px]">Vote avarege</span>
                <p className="text-[16px] text-[#868686]">
                  {vote_average?.toFixed(1)}/10
                </p>
              </div>
              <div className="grid grid-flow-row gap-1">
                <span className="font-semibold text-[20px]">Vote count</span>
                <p className="text-[16px] text-[#868686]">{vote_count}</p>
              </div>
              <div className="grid grid-flow-row gap-1">
                <span className="font-semibold text-[20px]">Adult</span>
                <p className="text-[16px] text-[#868686]">
                  {adult ? "Yes." : "No."}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 pt-[80px] max-w-[800px]">
            <p className="text-[25px]">Overview:</p>
            <p className="text-[#868686]">{overview}</p>
          </div>
        </div>
        <SameMovies id={id+""} />
      </div>
    </div>
  );
};

export default MovieItem;
