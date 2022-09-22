import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const image = require("./logoInmo.png");


const Navbar = () => {
  return (
   <nav class="navbar navbar-expand-lg color-navbar">
      <div class="container-fluid">
        <Link to="/">
          <img src={image} width="250px" alt="logo inmobiliaria"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span>
        </button>
        <nav>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link to="/login">
            <button className="btn btn-sm  links-navbar" type="button">
              INGRESAR
            </button>
          </Link>
          {" "}
          
          <Link to="/register">
          <button className="btn btn-sm links-navbar" type="button">
            REGISTRAR
          </button>
          </Link>  
        </div>
        </nav> 
      </div>
    </nav>  
  );
};

export default Navbar;


  


// <header>
//     <div className='logo'>
//         <Link to="/home" >
//             <img src= {image} alt='logo inmobiliaria' ></img>
//         </Link>
//         <Link to="/" >
//             <button className='botonNav'>MEJOR VIVIR</button>
//         </Link>
//     </div>
//     <nav>
//         <Link to="/login">
//             <button className='botonNav' >INGRESAR</button>
//         </Link>
//         <Link to="/register">
//             <button className='botonNav'>REGISTRAR</button>
//         </Link>
//         <Link to="/logout">
//             <button className='botonNav'>SALIR</button>
//         </Link>
//     </nav>
//     </header>


/* <nav class="navbar navbar-light bg-light">
<div class="container">
  <Link to={"/"}>
    <img
      src={image}
      alt=""
      width="250"
      height="170"
    />
  </Link>
</div>

<nav class="container-fluid justify-content-end">
  <Link to="/login">
    <button class="btn btn-sm btn-outline-secondary links-navbar" type="button">
      Ingresar
    </button>
  </Link>{" "}
  <Link to="/register">
    <button class="btn btn-sm btn-outline-secondary links-navbar" type="button">
      Registrarse
    </button>
  </Link>
</nav>
</nav> */
