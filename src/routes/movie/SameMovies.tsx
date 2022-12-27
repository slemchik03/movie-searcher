import { FC } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import getMovies from "../../utils/getMovies";

interface Props {
  id: string;
}

const sameMoviesQuery = (id: string) => ({
  queryKey: ["movie", "same", id],
  queryFn: async () =>
    getMovies({
      url: `/movie/${id}/similar?language=en-US`,
      title: "The same movies",
    }),
  // suspense: true
});

const SameMovies: FC<Props> = ({ id }) => {
  const { data, isFetched } = useQuery(sameMoviesQuery(id));
  console.log(data);

  return (
    <div className="grid grid-flow-row">
      <p className="text-[32px] pb-5 pt-5 xl:pt-0">The same movies:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-2 gap-8">
        {isFetched && 
          data?.results.map(({ backdrop_path, poster_path, id }) => {
            return (
              <Link key={id} to={"/movie/"+id}>
                <img
                  
                  className="w-[170px] h-[220px] object-cover"
                  src={`https://image.tmdb.org/t/p/original${
                    backdrop_path || poster_path
                  }`}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SameMovies;
