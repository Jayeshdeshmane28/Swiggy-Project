import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ resListForSearch, setResList, text, updateText }) => {
  const [searchText, setSearchtext] = useState("");

  let handleSearchText = (val) => {
    updateText(val);
  };

  let handleSearch = () => {
    if (text === "") {
      console.log("Empty Search Text entered");
      setResList(resListForSearch);
    } else {
      const searchRes = resListForSearch.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(text.trim().toLowerCase())
      );

      searchRes.length === null
        ? setResList(null)
        : setResList(searchRes);

      console.log("searchRes: ", searchRes);
    }
  };

  return (
    <div className=" mx-auto flex items-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-3xl px-4 pr-10 w-full h-10 bg-gray-50 focus:outline focus:outline-gray-200"
          value={text}
          onChange={(e) => handleSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
          onClick={handleSearch}
        >
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
