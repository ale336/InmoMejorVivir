import React from 'react'
import { Link } from 'react-router-dom';

//import TarjetaUnit from './TarjetaUnit';

const DetailsUnits = (props) => {
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
                <Link to="#">
                  <button 
                    type="button" 
                    class="btn btn-outline-danger d-grid gap-2 col-6 mx-auto">QUIERO VISITARLA
                  </button>
                </Link>
                 <Link to="#">
                    <button
                        type="button" 
                        class="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"> A FAVORITOS
                    </button>
                 </Link>   
            </div>
        </div>
      )
}

export default DetailsUnits;