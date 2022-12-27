import { NavLink, Link } from "react-router-dom";
import SearchFilm from "./SearchFilm";

const Header = () => {
  return (
    <div className="grid items-center  md:grid-cols-2 md:justify-between max-w-[1240px] px-4 mx-auto pt-6">
      <div className="grid items-center grid-flow-col md:gap-[90px] justify-between md:justify-start">
        <Link to="/">
          <p className="text-[32px] text-white font-bold">Movies</p>
        </Link>
        <div className="grid grid-flow-col gap-8 text-[#868686] text-[18px]">
          <NavLink to="/">
            <p className="">Home</p>
          </NavLink>
        </div>
      </div>
      <SearchFilm />
    </div>
  );
};

export default Header;
