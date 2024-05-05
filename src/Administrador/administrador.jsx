import React from "react";
import { BasicMenu } from "./administradorComponents";

/*
 <div className="right">
        <div className="image-wrapper">
          <img src="src\Multimedia\right.png" alt="Imagen" className="img" />
          <div className="wave-wrapper">
            <svg
              className="wave"
              width="783"
              height="1536"
              viewBox="0 0 783 1536"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="wave"
                d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
              />
            </svg>
          </div>
        </div>
      </div>
 */
export const Admin = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Caribbean Paradise.</h1>
        </div>
        <nav className="container-menu">
          <BasicMenu
            name="Reservas"
            option1="Crear Reserva"
            option2="Buscar Reserva"
            link1="/CrearReservaAdmin"
            link2="/BuscarReservaAdmin"
          />
          <BasicMenu
            name="Empleados"
            option1="Crear Empleados"
            option2="Buscar Empleados"
            link1="/CrearEmpleado"
            link2="/BuscarEmpleado"
          />
          <BasicMenu
            name="Habitaciones"
            option1="Crear Habitación"
            option2="Buscar Habitación"
            link1="/CrearHabitación"
            link2="/BuscarHabitación"
          />
        </nav>
      </header>
    </div>
  );
};
