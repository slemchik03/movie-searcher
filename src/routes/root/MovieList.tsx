import { useQueries } from "react-query";
import { QueryClient } from "react-query/types/core";
import categories, { ICategory } from "../../utils/categories";
import getMovies from "../../utils/getMovies";
import MoviesGroup from "./MoviesGroup";
import MoviesGroupLoading from "./MoviesGroupLoading";

const { fetchPopular, fetchActionMovies, fetchComedyMovies, fetchTopRated } =
  categories;

const moviesQuery = ({ url, title }: ICategory, suspense?: boolean) => ({
  queryKey: [url],
  queryFn: async () => getMovies({ url, title }),
  suspense,
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = moviesQuery(fetchPopular);
  // ⬇️ return data or fetch it
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const MovieList = () => {
  const responses = useQueries([
    moviesQuery(fetchPopular),
    moviesQuery(fetchActionMovies),
    moviesQuery(fetchComedyMovies),
    moviesQuery(fetchTopRated),
  ]);

  return (
    <div className="grid grid-flow-row text-white">
      {responses.map((movieList, i) => {
        return (
          <>
            {!movieList.isLoading ? (
              <MoviesGroup key={i} {...movieList?.data!} />
            ) : (
              <MoviesGroupLoading key={i} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default MovieList;
