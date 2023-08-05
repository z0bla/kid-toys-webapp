import React, { useState } from "react";

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
      <button>Search</button>
    </form>
  );
}
export default Search;
