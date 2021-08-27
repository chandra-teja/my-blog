import { useState } from "react";

function SearchBlog() {
  const [searchINput, setSearchINput] = useState("");

  //Search handler
  function searchHandler(event) {
    setSearchINput(event.target.value);
    console.log(searchINput);
    event.preventDefault();
  }
  return (
    <form onSubmit={searchHandler}>
      <div>
        <label htmlFor="search-bar">Search</label>
        <input
          id="search-bar"
          type="text"
          value={searchINput}
          onInput={searchHandler}
        ></input>
      </div>
    </form>
  );
}

export default SearchBlog;
