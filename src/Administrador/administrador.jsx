import React from "react";
import { BasicMenu } from "./administradorComponents";
import { Link } from "react-router-dom";

/*

 */
export const Admin = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Link
            to="/admin"
            style={{ textDecoration: "none", color: "var(--color-titulos)" }}
          >
            <h1>
              Caribbean Paradise
              <span style={{ color: "#05D3F8" }}>.</span>
            </h1>
          </Link>
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
      <main>
        <div className="contact">
          <div className="container">
            <div className="right">
              <div className="image-wrapper">
                <img
                  className="img"
                  src="src\Multimedia\right.png"
                  alt="img-reservas"
                />
                <div className="wave-wrap">
                  <svg
                    className="wave"
                    viewBox="0 0 783 1536"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="wave"
                      d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                      fill="#D9D9D9"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
