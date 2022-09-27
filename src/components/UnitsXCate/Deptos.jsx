import axios from "axios";
import React, { useEffect, useState } from "react";
import TarjetaUnit from "../Cards/TarjetaUnit";

const Deptos = () => {
  const [depto, setDepto] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categorias/Departamento")
      .then((res) => setDepto(res.data));
  }, []);

  return (
    <div>
      {depto.length ? (
        depto.map((item) => {
          return (
            <TarjetaUnit
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

export default Deptos;