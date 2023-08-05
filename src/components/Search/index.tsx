import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

import styles from "./Search.module.css";

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
    <form className={styles.form} onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchField}
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
