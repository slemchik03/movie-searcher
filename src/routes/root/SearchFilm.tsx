import { Suspense, useDeferredValue, useState } from "react";
import SearchResults from "./SearchResults";
import SearchResultsLoading from "./SearchResultsLoading";

const SearchFilm = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const deferredValue = useDeferredValue(value);

  return (
    <div className="flex justify-center py-5 xl:justify-end md:py-0">
      <div className="flex relative z-10 flex-col py-2 max-w-[374px] px-4 bg-[#374151] rounded-[37px] items-center">
        <input
          onChange={(e: any) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          className="text-white placeholder:text-[#868686] text-[18px] bg-transparent outline-none"
          type="text"
          placeholder="Search movie"
        />
        {deferredValue && isFocused && (
          <Suspense fallback={<SearchResultsLoading />}>
            <SearchResults query={deferredValue} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default SearchFilm;
