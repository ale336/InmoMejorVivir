import axios from "axios";
import React, { useEffect, useState } from "react";
import TarjetaUnit from "../Cards/TarjetaUnit";

const Local = () => {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categorias/Locales")
      .then((res) => setLocal(res.data));
  }, []);

  return (
    <div>
      {local.length ? (
        local.map((item) => {
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

export default Local;