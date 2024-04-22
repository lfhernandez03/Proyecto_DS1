import React from "react";
import { TextFields } from "./loginComponents";
import { ButtonLogin } from "./loginComponents";

export const Container = () => {
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
              <TextFields
                label="Nombre de Usuario" 
                name="usuario" 
              />
              <TextFields 
                label="Contraseña" 
                name="contraseña"
                type="password" 
              />
              <ButtonLogin 
                type="submit" 
                value="Iniciar Sesión" 
              />
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
