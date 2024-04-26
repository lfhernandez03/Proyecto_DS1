import React from "react";
import { TextFields } from "../Login/loginComponents";
import { ButtonLogin } from "../Login/loginComponents";
import { Link } from "react-router-dom";

export const RecoverTab = () => {
  return (
    <body>
      <div className="recover-container">
        <h1>Crear Nueva Contraseña</h1>
        <form action="/RecoverTab" method="get">
          <TextFields label="Nombre de usuario" name="usuario" />
          <TextFields label="Identificación" name="id" />
          <TextFields
            label="Nueva Contraseña"
            name="nuevaContraseña"
            type="password"
          />
          <TextFields
            label="Confirmar Contraseña"
            name="ConfirmacionContra"
            type="password"
          />
          <div className="ButtonRecov">
            <Link className="ToLogin" to="/">
              <ButtonLogin link="" type="submit" value="Crear" title="Crear" />
            </Link>
          </div>
        </form>
      </div>
    </body>
  );
};
