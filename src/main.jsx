import React from "react";
import ReactDOM from "react-dom/client";
import { LoginTab } from "./Login/login.jsx";
import { RecoverTab } from "./PasswordRecover/RecoverTab.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./login.css";
import "./recoverTab.css";
import "./empleados.css"
import { ContainerEmp, Container1, Container2 } from "./Empleados/empleados.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginTab />}/>
        <Route exact path="/CrearContraseña" element={<RecoverTab />} />
        <Route path="/Empleados" element={<ContainerEmp />} />
        <Route path="/HacerReserva" element={<Container1 />} />
        <Route path="/BuscarReserva" element={<Container2 />} />
      </Routes>
    </BrowserRouter>
  </>
)



