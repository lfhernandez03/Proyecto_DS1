import React from "react";
import { LoginTab } from "./Login/login.jsx";
import { RecoverTab } from "./PasswordRecover/RecoverTab.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from './rutasConst.js';

import {
  ContainerEmp,
  Container1,
  Container2,
} from "./Empleados/empleados.jsx";

import {
  Admin
} from "./Administrador/administrador.jsx";

import {
  ContainerBuscarReserva,
  ContainerCrearReserva,
} from "./Administrador/admin_reservas.jsx";

import {
  ContainerCrearEmpleado,
  ContainerBuscarEmpleado
} from "./Administrador/admin_empleados.jsx";

import {
  ContainerBuscarHabitación,
  ContainerCrearHabitación,
} from "./Administrador/admin_habitacion.jsx"

export const Rutas = () => (
  <>
    <Router>
      <Routes>

        //Rutas del Login
        <Route path={ROUTES.LOGIN} element={<LoginTab />} />
        <Route path={ROUTES.CAMBIAR_CONTRA} element={<RecoverTab />} />

        //Rutas del Empleado
        <Route path={ROUTES.EMPLEADOS} element={<ContainerEmp />} />
        <Route path={ROUTES.INSERTAR_RESERVA} element={<ContainerCrearReserva />} />
        <Route path={ROUTES.CONSULTAR_RESERVA} element={<ContainerBuscarReserva />} />

        //Rutas del Administrador
        <Route path={ROUTES.ADMIN} element={<Admin />} />
        <Route path={ROUTES.INSERTAR_RESERVA} element={<ContainerCrearReserva />} />
        <Route path={ROUTES.INSERTAR_HABITACION} element={<ContainerCrearHabitación />} />
        <Route path={ROUTES.INSERTAR_EMPLEADO} element={<ContainerCrearEmpleado />} />
        <Route path={ROUTES.CONSULTAR_RESERVA} element={<ContainerBuscarReserva />} />
        <Route path={ROUTES.CONSULTAR_EMPLEADO} element={<ContainerBuscarEmpleado />} />
        <Route path={ROUTES.CONSULTAR_HABITACION} element={<ContainerBuscarHabitación />} />

        //Redirección por defecto
        <Route path="*" element={<LoginTab />} />
      </Routes>
    </Router>
  </>
);
