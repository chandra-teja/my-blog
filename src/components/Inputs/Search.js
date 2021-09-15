import { useState } from "react";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  function searchInputHandler(event) {
    setSearchInput(event.target.value);
  }
  function searchbuttonHandler(event) {
    props.searchData(searchInput);
    event.preventDefault();
  }

  function closeSearchHandler(event) {
    setSearchInput("");
    props.close();
    console.log("close search");
  }

  return (
    <div>
      <textarea
        id="search-bar"
        placeholder="Search blog"
        value={searchInput}
        onChange={searchInputHandler}
      ></textarea>
      <button onClick={searchbuttonHandler}>Search</button>
      <button onClick={closeSearchHandler}>X</button>
    </div>
  );
}

export default Search;
