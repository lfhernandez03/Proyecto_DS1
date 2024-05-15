import React from "react";
import { BasicMenu } from "./administradorComponents";
import { Link } from "react-router-dom";

/*

 */
export const Admin = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/admin" style={{textDecoration:"none", color:"var(--color-titulos)"}}>
            <h1>
              Caribbean Paradise
              <span style={{color:"#05D3F8"}}>.</span>
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
    </div>
  );
};
