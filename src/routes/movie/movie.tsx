import { QueryClient, useQuery } from "react-query";
import { Params, useParams } from "react-router-dom";
import getSelectedMovie from "../../utils/getSelectedMovie";
import MovieItem from "./MovieItem";

const selectedMovieQuery = (id: string) => ({
  queryKey: ["movie",id],
  queryFn: async () => getSelectedMovie(id),
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const query = selectedMovieQuery(params.id + "");

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

const Movie = () => {
  const { id } = useParams();
  const { data, isFetching } = useQuery(selectedMovieQuery(id + ""));

  if (data) {
    return <MovieItem {...data} />;
  }

  if (isFetching) return (
    <h1 className="text-white text-[32px] text-center py-5">Fetching...</h1>
  )

  return (
    <h1 className="text-white text-[32px] text-center py-5">Oops something went wrong!</h1>
  )
};

export default Movie;
