import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

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
      <button className={styles.searchButton}>
        <IoSearchOutline />
      </button>
    </form>
  );
}
export default Search;
