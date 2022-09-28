import React from 'react'
import "./TarjetaUnit.css";

const TarjetaUnit = (props) => {

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
            <button 
            type="button" 
            class="btn btn-outline-danger d-grid gap-2 col-6 mx-auto">VER DETALLES</button>
        </div>
    </div>
  )
}
export default TarjetaUnit;

/* <h1>{props.address}</h1>
<img src={props.img} alt="Primera Imagen"></img> 
<p>{props.type_unit}</p>  */