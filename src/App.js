import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import FormRegister from './components/FormRegister';


function App() {  
    return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/register' element={<FormRegister/>}/>
        </Routes>
    </div>
    );
}



export default App;

