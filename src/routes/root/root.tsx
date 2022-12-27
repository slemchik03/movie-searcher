import { useOutlet } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";
import RecomendedMovies from "./RecomendedMovies";

const Root = () => {
  const outlet = useOutlet();

  return (
    <div className="bg-[#192026] min-h-screen">
      <Header />
      <div className="max-w-[1200px] px-[15px] mx-auto">
        <RecomendedMovies />
        <MovieList />
      </div>
      
      {outlet}
    </div>
  );
};

export default Root;
