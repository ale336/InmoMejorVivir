import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import FormRegister from './components/FormRegister';
import FormLogin from './components/FormLogin';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar';


function App() {  
    return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Routes>
            <Route path='/home' element ={<Home/>}/>
            <Route path='/register' element={<FormRegister/>}/>
            <Route path='/login' element ={<FormLogin/>}/>
        </Routes>
    </div>
    );
}



export default App;

