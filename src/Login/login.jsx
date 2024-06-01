import React, { useEffect, useState } from "react";
import { TextFields } from "./loginComponents";
import { ButtonLogin } from "./loginComponents";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../rutasConst.js';


export const LoginTab = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Effect to log form data whenever it changes
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation of fields
    if (formData.id && formData.password) {
      fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
          pass: formData.password,
        }),
      })
        .then(async (response) => {
          if (!response.ok) throw new Error(await response.text());

          const data = await response.json();

          document.cookie = `token=${data.token}; path=/`;
          if (data.modo_Recuperacion) return navigate(ROUTES.CAMBIAR_CONTRA);

          data.modo_Admin ? navigate(ROUTES.ADMIN) : navigate(ROUTES.EMPLEADOS);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  return (
    <div className="container">
      <div className="left-container">
        <h1>Hotel Caribbean Paradise</h1>
        <h2>¡Bienvenido!</h2>
      </div>
      <div className="right-container">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <TextFields
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            <TextFields
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <ButtonLogin
              title="Iniciar Sesión"
              type="submit"
              value="Iniciar Sesión"
            />
            <div className="footer">
              <h5>
                <Link className="ToRecoverTab" to={ROUTES.RECUPERAR_CONTRA}>
                  ¿Olvidastes tu contraseña?
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
