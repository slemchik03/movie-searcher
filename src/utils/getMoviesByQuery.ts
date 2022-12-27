import API_KEY from "./API_KEY";
import { IMovieResponse } from "./getMovies";

export default (query: string): () => Promise<IMovieResponse> => {
  return async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );

      return response.json();
    } catch (error) {
      return [] as unknown as Promise<IMovieResponse>;
    }
  };
};
