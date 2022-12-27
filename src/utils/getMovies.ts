import API_KEY from "./API_KEY";
import {  ICategory } from "./categories";

export interface IMovie {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  original_name: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  media_type: string;
  first_air_date: string;
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  urlTitle: string;
}

export default async ({url, title}: ICategory) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${url}&api_key=${API_KEY}`
    );
    const movies: IMovieResponse = (await response.json());
    movies.urlTitle = title
      console.log(`https://api.themoviedb.org/3${url}&api_key=${API_KEY}`);
      
      
    return  movies;
  } catch (error) {
    return [] as unknown as IMovieResponse;
  }
};
