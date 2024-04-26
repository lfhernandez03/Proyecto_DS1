import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Login/login.jsx";
import { RecoverTab } from "./PasswordRecover/RecoverTab.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./login.css"
import "./recoverTab.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Container />}/>
        <Route exact path="/CrearContraseña" element={<RecoverTab />} />
      </Routes>
    </BrowserRouter>
  </>
)



