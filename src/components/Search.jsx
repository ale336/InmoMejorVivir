import React, { useState } from "react";
import axios from 'axios'
import TarjetaUnit from "./Cards/TarjetaUnit";


const Search = () => {

  const [busqueda,setBusqueda] = useState ("");
  const [resultados,setResultados] = useState ([]);
  
  const handleSearch = (e) => {
    setBusqueda (e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(busqueda);
    axios.get(`http://localhost:3001/api/units/search/${busqueda}`)
    .then((res)=>res.data)
    .then((data)=> setResultados(data));
  }


  return (
    <nav>
      <div class="container-fluid">
        <form className="d-flex colorform" role="search" onSubmit={handleSubmit}>
          <input
            class="form-control me-2 "
            type="search"
            placeholder="Zona preferida"
            aria-label="Search"
            onChange={handleSearch}
            value={busqueda}  
          ></input>
           
            <button 
              class="btn btn-outline-danger d-grid gap-2 col-2 mx-auto" 
              type="submit">
              BUSCAR
            </button>
           
        </form>
      </div>
        <div>
        <h2>RESULTADOS</h2>
          {resultados.length ?  resultados.map((items)=>{
            return (
              <TarjetaUnit address={items.address} type_unit={items.type_unit} img={items.image1}/>
              )}) : <></>
            } 
        </div>  
        </nav>
  );
};

export default Search;


 