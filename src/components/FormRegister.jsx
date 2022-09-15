import React from "react"
import axios from "axios"
import { useState} from "react"


const FormRegister = () => {

    const [name,setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleNameChange =(e)=>{
        setName (e.target.value)
    }
    const handleLastnameChange =(e)=>{
        setLastname (e.target.value)
    }
    const handleEmailChange =(e)=>{
        setEmail (e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/api/users/register",{name,lastname,email,password})
            .then((res)=>res.data)
            .then((user)=>console.log("NUEVO USUARIO",user));
    }

    return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <h3>Registro de Usuarios</h3>
            <div>
                <label>Nombre</label>
                <input 
                    className="entradas" 
                    type="text" 
                    placeholder="Ingrese su nombre" 
                    onChange={handleNameChange} 
                    value={name}>
                </input>
            </div>
            <div>
                <label>Apellido</label>
                <input 
                    className="entradas" 
                    type="text"  
                    placeholder="Ingrese su apellido" 
                    onChange={handleLastnameChange} 
                    value={lastname}>
                </input>
            </div>
            <div>
                <label>E-mail</label>
                <input 
                    className="entradas" 
                    type="email" 
                    placeholder="Ingrese su e-mail" 
                    onChange={handleEmailChange} 
                    value={email}>
                </input>
            </div>
            <div>
            <label>Password</label>
            <input 
                className="entradas" 
                type="password" 
                placeholder="Ingrese su password" 
                onChange={handlePasswordChange} 
                value={password}>
            </input>
            </div>
            <button 
                className='boton' 
                type="submit" 
                value="Registrar">REGISTRAR</button>
        </form>
    </div>
  )
}

export default FormRegister;