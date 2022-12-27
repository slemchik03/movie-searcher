import { FC } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import getMoviesByQuery from "../../utils/getMoviesByQuery";

interface Props {
  query: string;
}

const SearchResults: FC<Props> = ({ query }) => {
  const { data, isFetched } = useQuery(query, getMoviesByQuery(query), {
    suspense: true,
  });
  const isEmpty = isFetched && !data?.results.length;
  return (
    <div className="grid absolute z-[-10] w-full py-5 px-4 top-[23px] left-0 bg-[#374151] grid-flow-row">
      {isEmpty ? (
        <p className="text-[20px] text-white text-center">Nothing was not found.</p>
      ) : (
        data?.results
          ?.slice(0, 4)
          ?.map(({ title, backdrop_path, poster_path, id }) => {
            return (
              <Link to={"/movie/"+id} key={id} className="grid grid-flow-col items-center gap-4 py-2">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    backdrop_path || poster_path
                  }`}
                  className="w-[60px] h-auto object-contain"
                />
                <p className="font-semibold text-[16px] text-white">{title}</p>
              </Link>
            );
          })
      )}
    </div>
  );
};

export default SearchResults;
