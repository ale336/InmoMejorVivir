import React from 'react'
import "./TarjetaUnit.css";

const TarjetaUnit = (props) => {

  return (
    <div className='containerTarjeta'>
        <div className='cardUnidades'>
            <div>
                <h2>{props.address}</h2>
            </div>
            <figure>
                <img src={props.img} alt="Primera Imagen"></img>
            </figure>
            <button 
            type="button" 
            class="btn btn-outline-danger">VER DETALLES</button>
        </div>
    </div>
  )
}
export default TarjetaUnit;

/* <h1>{props.address}</h1>
<img src={props.img} alt="Primera Imagen"></img> 
<p>{props.type_unit}</p>  */