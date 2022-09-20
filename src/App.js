import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';


function App() {  
    return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/register' element={<FormRegister/>}/>
            <Route path='/login' element ={<FormLogin/>}/>
        </Routes>
    </div>
    );
}



export default App;

