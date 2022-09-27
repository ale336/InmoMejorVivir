import React from "react";
import { UnitsCards } from "./UnitsCards";
import styles from "./Home.module.css";
import { FcBinoculars } from "react-icons/fc";


const Home = () => {
  const unidadesHome = [
    {
      id: 1,
      categoria: "Casa",
      imagen:
        "http://planosdecasasmodernas.com/wp-content/uploads/2015/10/Plano-de-casa-sencilla-de-2-dormitorios.jpg",
    },
    {
      id: 2,
      categoria: "Dúplex",
      imagen:
        "https://i.pinimg.com/736x/55/12/86/5512867b172cab5eafd16a8ed315b3b3.jpg",
    },
    {
      id: 3,
      categoria: "Departamentos",
      imagen:
        "https://img10.naventcdn.com/avisos/111/00/59/10/87/31/720x532/224480437.jpg",
    },
    {
      id: 4,
      categoria: "Locales",
      imagen:
        "https://www.busquetsgalvez.com/web/wp-content/uploads/2017/07/escaparate-local-comercial-1.jpg",
    },
  ];
  // console.log(unidadesHome);

  return (
    <div>
      <h4><FcBinoculars/> ¿ QUÉ ESTAS BUSCANDO ? <FcBinoculars/></h4>
    
      <ul className={styles.grilla} >
        {unidadesHome.map((unidad) => (
          <UnitsCards key={unidad.id} unidad={unidad} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
