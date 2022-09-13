import './App.css';

function App() {  
  return (
    <div className="App">
        <form>
        <h3>Registro de Usuarios</h3>
        <div>
            <label>Nombre</label>
            <input class="entradas" type="text" id="name" placeholder="Ingrese su nombre" ></input>
        </div>
        <div>
            <label>Apellido</label>
            <input class="entradas" type="text" id="lastname" placeholder="Ingrese su apellido" ></input>
        </div>
        <div>
            <label>E-mail</label>
            <input class="entradas" type="text" id="email" placeholder="Ingrese su e-mail" ></input>
        </div>
        <div>
            <label>Password</label>
            <input class="entradas" type="text" id="password" placeholder="Ingrese su password" ></input>
        </div>
        <input class="boton" type="submit" value="Registrar"></input>
    </form>
    </div>
    
  );
}

export default App;
