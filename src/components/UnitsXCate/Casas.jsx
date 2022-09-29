import axios from "axios";
import React, { useEffect, useState } from "react";
import TarjetaUnit from "../Cards/TarjetaUnit";

const Casas = () => {
  const [casa, setCasa] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categorias/Casa") 
      .then((res) => setCasa(res.data));
  }, []);

  return (
    <div>
      {casa.length ? (
        casa.map((item) => { 
          return (
            <TarjetaUnit
              key={item.id}
              address={item.address}
              img={item.image1}
              type_unit={item.type_unit}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Casas;

// { (casa.length)? casa.map((item)=>console.log(item)):<></>}
