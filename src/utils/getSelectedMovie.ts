import API_KEY from "./API_KEY";
import { IMovie } from "./getMovies";

export default async (id: string): Promise<IMovie | null> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`
    );
    const data = await response.json();
    if (Object.hasOwn(data, "success") && !data.success) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
};
