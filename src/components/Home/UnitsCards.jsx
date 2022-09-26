import { Link } from "react-router-dom"
import styles from "./UnitsCards.module.css"


export function UnitsCards({unidad}) {
    //console.log(styles);
    return (
    <li className={styles.UnitCard}>
        <div>{unidad.categoria}</div>
        <Link to={unidad.categoria}>
        <img
            className={styles.UnitImg} 
            src={unidad.imagen} 
            alt={unidad.categoria}
            width={550}
            height={350} />
        </Link>  
    </li>
    )
}
