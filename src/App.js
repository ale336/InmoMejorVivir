import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Home from './components/Home/Home';
import Casas from './components/UnitsXCate/Casas';
import Deptos from './components/UnitsXCate/Deptos';
import Duplex from './components/UnitsXCate/Duplex';
import Local from './components/UnitsXCate/Local';

import Search from './components/Search';


function App() {  
    return (
    <div> 
        <Navbar/>
        {/* <Home /> */}
        <div>
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/register' element={<FormRegister/>}/>
            <Route path='/login' element ={<FormLogin/>}/>
            <Route path='/Casa' element={<Casas />}></Route>
            <Route path='/Departamentos' element={<Deptos />}></Route>
            <Route path='/Dúplex' element={<Duplex />}></Route>
            <Route path='/Locales' element={<Local />}></Route>
            <Route path='/search' element={<Search/>}></Route>
        </Routes>
        </div>
        <div className="footer">
            <p>INMOBILIARIA  MEJOR  VIVIR - USHUAIA - TIERRA DEL FUEGO</p>
        </div>
     
    </div>
    );
    }
export default App;

