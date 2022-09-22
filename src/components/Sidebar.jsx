import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="wrapper fixed-left">
      <nav id="sidebar">
        

        <ul class="list-unstyled components">
          <li>
            <Link to="" >
               PERFIL
            </Link>
          </li>
          <li>
            <Link to="">
              CATEGORIAS
            </Link>
          </li>
          <li>
            <Link to="">
              POPULARES
            </Link>
          </li>
          <li>
            <Link to="">
              SALIR
            </Link>
          </li>
          <li>
            <Link to="">
              NOSOTROS
            </Link>
          </li>
        </ul>
      </nav>

      <div id="content"></div>
    </div>
  );
};

export default Sidebar;

