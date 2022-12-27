import { FC } from "react";
import { IMovieResponse } from "../../utils/getMovies";
import MovieItem from "./MovieItem";

interface Props extends IMovieResponse {}

const MoviesGroup: FC<Props> = ({urlTitle, results}) => {
  return (
    <div className="pt-[42px]">
      <p className="font-semibold pb-6 text-[36px]">
        {urlTitle}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {results.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesGroup;
