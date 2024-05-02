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
  Admin,
  ContainerBuscarEmpleado,
  ContainerBuscarHabitación,
  ContainerCrearEmpleado,
  ContainerCrearHabitación,
} from "./Administrador/administrador.jsx";
import {
  ContainerBuscarReserva,
  ContainerCrearReserva,
} from "./Administrador/admin_reservas.jsx";


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginTab />}/>
//         <Route exact path="/CrearContraseña" element={<RecoverTab />} />
//         <Route path="/Empleados" element={<ContainerEmp />} />
//         <Route path="/HacerReserva" element={<Container1 />} />
//         <Route path="/BuscarReserva" element={<Container2 />} />
//       </Routes>
//     </BrowserRouter>
//   </>
// )

export const Rutas = () =>(
  <>
    <Router>
      <Routes>

        //Rutas del Login
        <Route path="/" element={<LoginTab />} />
        <Route exact path="/CrearContraseña" element={<RecoverTab />} />

        //Rutas del Empleado
        <Route path="/Empleados" element={<ContainerEmp />} />
        <Route path="/HacerReserva" element={<Container1 />} />
        <Route path="/BuscarReserva" element={<Container2 />} />

        //Rutas del Administrador
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CrearReservaAdmin" element={<ContainerCrearReserva />} />
        <Route path="/CrearHabitación" element={<ContainerCrearHabitación />} />
        <Route path="/CrearEmpleado" element={<ContainerCrearEmpleado />} />
        <Route path="/BuscarReservaAdmin" element={<ContainerBuscarReserva />} />
        <Route path="/BuscarEmpleado" element={<ContainerBuscarEmpleado />} />
        <Route path="/BuscarHabitación" element={<ContainerBuscarHabitación />} />
        
      </Routes>
    </Router>
  </>
);
