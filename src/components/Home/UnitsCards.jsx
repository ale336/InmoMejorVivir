import axios from "axios";
import { Link } from "react-router-dom"
import styles from "./UnitsCards.module.css"


export function UnitsCards({unidad}) {
   

    const handleCLick=()=>{
        
        axios.get("http://localhost:3001/api/units/all")
        //.then(()=>{ console.log("funciona!")}   
        .then((res)=>res.data
            
        )}
      
    

    return (
    <li className={styles.UnitCard}>
        <div>{unidad.categoria}</div>
        <Link to={unidad.categoria}>
        <img
            onClick={handleCLick}
            className={styles.UnitImg} 
            src={unidad.imagen} 
            alt={unidad.categoria}
            width={550}
            height={350} />
        </Link>  
    </li>
    )
}
