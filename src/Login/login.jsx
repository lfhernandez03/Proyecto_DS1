import React from "react";
import { TextFields } from "./loginComponents";
import { ButtonLogin } from "./loginComponents";
import { Link } from "react-router-dom";

export const LoginTab = () => {
  return (
    <body>
      <div className="container">
        <div className="left-container">
          <h1>Hotel Caribbean Paradise</h1>
          <h2>¡Bienvenido!</h2>
        </div>
        <div className="right-container">
          <div className="login-container">
            <h1>Login</h1>
            <form action="/login" method="get">
              <TextFields label="Nombre de Usuario" name="usuario" />
              <TextFields
                label="Contraseña"
                name="contraseña"
                type="password"
              />
              <Link className="ToEmpleado" to="/Empleados">
                <ButtonLogin
                  title="Iniciar Sesión"
                  type="submit"
                  value="Iniciar Sesión"
                />
              </Link>
              <div className="footer">
                <h5>
                  <Link className="ToRecoverTab" to="/CrearContraseña">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
