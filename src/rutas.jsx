import React from "react";
import { LoginTab } from "./Login/login.jsx";
import { CambiarContra } from "./PasswordRecover/CambiarContra.jsx";
import { RecuperarContra } from "./PasswordRecover/RecuperarContra.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from './rutasConst.js';

import {
  ContainerEmp,
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
} from "./Administrador/admin_habitacion.jsx";

export const Rutas = () => (
  <>
    <Router>
      <Routes>

        //Rutas del Login
        <Route path={ROUTES.LOGIN} element={<LoginTab />} />
        <Route path={ROUTES.CAMBIAR_CONTRA} element={<CambiarContra />} />
        <Route path={ROUTES.RECUPERAR_CONTRA} element={<RecuperarContra />} />

        //Rutas del Empleado
        <Route path={ROUTES.EMPLEADOS} element={<ContainerEmp />} />
        <Route path={ROUTES.RESERVA_INSERTAR_EMP} element={<ContainerCrearReserva />} />
        <Route path={ROUTES.RESERVA_CONSULTAR_EMP} element={<ContainerBuscarReserva />} />

        //Rutas del Administrador
        <Route path={ROUTES.ADMIN} element={<Admin />} />
        <Route path={ROUTES.RESERVA_INSERTAR} element={<ContainerCrearReserva />} />
        <Route path={ROUTES.RESERVA_CONSULTAR} element={<ContainerBuscarReserva />} />
        <Route path={ROUTES.HABITACION_INSERTAR} element={<ContainerCrearHabitación />} />
        <Route path={ROUTES.EMPLEADO_INSERTAR} element={<ContainerCrearEmpleado />} />
        <Route path={ROUTES.EMPLEADO_CONSULTAR} element={<ContainerBuscarEmpleado />} />
        <Route path={ROUTES.HABITACION_CONSULTAR} element={<ContainerBuscarHabitación />} />

        //Redirección por defecto
        <Route path="*" element={<LoginTab />} />
      </Routes>
    </Router>
  </>
);
