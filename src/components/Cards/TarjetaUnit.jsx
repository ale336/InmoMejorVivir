import React from "react";
import React from 'react'
import { Link } from 'react-router-dom';
import "./TarjetaUnit.css";


const TarjetaUnit = (props) => {

  return (
    <div className="containerTarjeta">
      <div className="cardUnidades">
        <div>
          <h2>{props.address}</h2>
          <h3>{props.type_unit}</h3>

console.log(props);
  return (
    <div className='containerTarjeta'>
        <div className='cardUnidades'>
            <div>
                <h2>{props.address}</h2>
                <h3>{props.type_unit}</h3>
            </div>
            <figure>
                <img src={props.img} alt="Primera Imagen"></img>
            </figure>
            <Link to="/details">
              <button 
                type="button" 
                class="btn btn-outline-danger d-grid gap-2 col-6 mx-auto">VER DETALLES
              </button>
            </Link>
        </div>
        <figure>
          <img src={props.img} alt="Primera Imagen"></img>
        </figure>

        <button
         
          type="button"
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
        >
          VER DETALLES
        </button>
        
      </div>
    </div>
  );
};
export default TarjetaUnit;


