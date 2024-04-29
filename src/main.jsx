import React from "react";
import ReactDOM from "react-dom/client";
import { LoginTab } from "./Login/login.jsx";
import { RecoverTab } from "./PasswordRecover/RecoverTab.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ContainerEmp, Container1, Container2 } from "./Empleados/empleados.jsx";
import { Admin, ContainerCrearReserva, ContainerBuscarReserva, ContainerBuscarEmpleado, ContainerBuscarHabitación, ContainerCrearEmpleado, ContainerCrearHabitación } from "./Administrador/administrador.jsx";


import "./login.css";
import "./recoverTab.css";
import "./empleados.css";;
import "./admin.css";



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

ReactDOM.createRoot(document.getElementById("root")).render(
  <>    
    <Router>
       <Routes>
         <Route path="/" element={<Admin />} />
         <Route path="/CrearReserva" element={<ContainerCrearReserva/>} />
         <Route path="/CrearHabitación" element={<ContainerCrearHabitación/>} />
         <Route path="/CrearEmpleado" element={<ContainerCrearEmpleado/>} />
         <Route path="/BuscarReserva" element={<ContainerBuscarReserva/>} />
         <Route path="/BuscarEmpleado" element={<ContainerBuscarEmpleado/>} />
         <Route path="/BuscarHabitación" element={<ContainerBuscarHabitación/>} />
       </Routes>
     </Router>
  </>
)


