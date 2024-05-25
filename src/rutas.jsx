import React from "react";
import { LoginTab } from "./Login/login.jsx";
import { RecoverTab } from "./PasswordRecover/RecoverTab.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

export const Rutas = () =>(
  <>
    <Router>
      <Routes>

        //Rutas del Login
        <Route path="/api/login" element={<LoginTab />} />
        <Route path="/api/login/cambiarContra" element={<RecoverTab />} />

        //Rutas del Empleado
        <Route path="/Empleados" element={<ContainerEmp />} />
        <Route path="/api/reserva/insertar" element={<ContainerCrearReserva />} />
        <Route path="/api/reserva/consultar" element={<ContainerBuscarReserva />} />

        //Rutas del Administrador
        <Route path="/Admin" element={<Admin />} />
        <Route path="/api/reserva/insertar" element={<ContainerCrearReserva />} />
        <Route path="/api/habitacion/insertar" element={<ContainerCrearHabitación />} />
        <Route path="/api/empleado/insertar" element={<ContainerCrearEmpleado />} />
        <Route path="/api/reserva/consultar" element={<ContainerBuscarReserva />} />
        <Route path="/api/empleado/consultar" element={<ContainerBuscarEmpleado />} />
        <Route path="/api/habitacion/consultar" element={<ContainerBuscarHabitación />} />
        
        //Redirección por defecto
        <Route path="*" element={<LoginTab />} />
      </Routes>
    </Router>
  </>
);
