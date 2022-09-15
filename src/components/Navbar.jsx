import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom'
import FormRegister from './FormRegister';
const image = require("./logoInmo.png");
const Navbar = () => {
  
return (
    <header>
    <div className='logo'>
        <img src= {image} alt='logo inmobiliaria' ></img>
        <Link to="/" >
            <button className='botonNav'>MEJOR VIVIR</button>       
        </Link>
    </div>
    <nav>
        <Link to="/login">
            <button className='botonNav' >INGRESAR</button> 
        </Link>
        <Link to="/register">
            <button className='botonNav'>REGISTRAR</button>
        </Link>
    </nav>
    </header>
  )
}

export default Navbar;