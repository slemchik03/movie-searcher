export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/movie/week?`,
  },
  fetchPopular: {
    title: "Popular",
    url: "/movie/popular?language=en-US",
  },
  fetchUpcoming: {
    title: "Upcoming",
    url: "/movie/upcoming?language=en-US",
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?with_genres=878`,
  },
};

export interface ICategory {
  title: string;
  url: string;
}
