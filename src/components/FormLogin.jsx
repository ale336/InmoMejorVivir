import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmailChange =(e)=>{
        setEmail (e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/api/users/login",{email,password})
            .then((res)=>res.data)
            .then((data)=>{navigate("/")})
            .then(alert(`Bienvenida/o ${email}`));
        }

    return (
    <div>
        <form onSubmit={handleSubmit} className="formulario">
            <h3>INGRESA A TU PERFIL</h3>
            <div>
                <label>E-mail</label>
                <input 
                   
                    type="email" 
                    placeholder="Ingrese su e-mail" 
                    onChange={handleEmailChange} 
                    value={email}>
                </input>
            </div>
            <div>
            <label>Password</label>
            <input 
                 
                type="password" 
                placeholder="Ingrese su password" 
                onChange={handlePasswordChange} 
                value={password}>
            </input>
            </div>
            <button 
                type="submit" 
                value="Ingresar">
                INGRESAR</button>
        </form>
    </div>
  )
}

export default FormLogin;
