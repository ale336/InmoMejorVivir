import axios from "axios";
import React, { useEffect, useState } from "react";
import TarjetaUnit from "../Cards/TarjetaUnit";

const Duplex = () => {
  const [duplex, setDuplex] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categorias/Dúplex")
      .then((res) => setDuplex(res.data));
  }, []);

  return (
    <div>
      {duplex.length ? (
        duplex.map((item) => {
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

export default Duplex;