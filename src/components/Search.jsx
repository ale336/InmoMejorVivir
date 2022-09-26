import React from "react";

const Search = () => {
  return (
    <nav>
      <div class="container-fluid">
        <form className="d-flex colorform" role="search">
          <input
            class="form-control me-2 "
            type="search"
            placeholder="Zona preferida"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-danger " type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Search;


  /* <nav >
    <div class="container-fluid">
    <form className="d-flex colorform" role="search">
      <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
    </div>
    </nav> */

