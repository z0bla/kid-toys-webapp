import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="search"
        placeholder="Search everything"
        onChange={handleSearchInput}
      />
      <button>
        <CiSearch />
      </button>
    </form>
  );
}
export default Search;
