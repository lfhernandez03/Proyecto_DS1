import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Rutas } from "./rutas"

import "./login.css";
import "./cambiarContra.css";
import "./empleados.css";
import "./admin.css";
import "./admin_reservas.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Rutas />
  </>
);
