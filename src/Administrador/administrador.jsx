import React from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicMenu,
  BasicSelect,
  BasicSelectTipo,
} from "./administradorComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminLayout } from "./AdministradorLayout";

export const Admin = () => {
  return (
    <div className="cuerpo">
      <div>
        <h1>Bienvenido,</h1>
        <h3>Usuario</h3>
        <h4 className="ques">¿Qué quieres hacer hoy?</h4>
        <div className="menu">
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
        </div>
      </div>
    </div>
  );
};
