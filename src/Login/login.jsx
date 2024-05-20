import React, { useState } from "react";
import { TextFields, ButtonLogin } from "./loginComponents";
import { Link, useNavigate } from "react-router-dom";

export const LoginTab = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // si estan correctos hacer la llamada al backend para valdiar el usuario
    // si la respuesta es exitosa redireccionar a home
    // si no es exitosa mostrar el error
  };

  /*const handleSubmit = (event) => {
    event.preventDefault();

    //Validación de campos
    if (formData.id && formData.password) {
      alert("Formulario válido. Redirigiendo...");
      navigate("/Admin");
    } else {
      alert("Por favor, completa todos los campos");
    }
  };*/

  // PREFERÍ CAMBIARLO, PARA PROBAR, FUERA DE ESO NUNCA CAMBIARON LO DEL LINK .|.

  /*const handleSubmit = (event) => {
    event.preventDefault();
    console.log("si funciono");

    // Validación de campos
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
        .then((response) => response.json())
        .then((data) => {
          if (data.existe && data.correcto) {
            console.log("Usuario encontrado y contraseña correcta");
            navigate("/Admin");
          } else if (data.existe && !data.correcto) {
            console.log("Contraseña incorrecta");
            alert("Contraseña incorrecta");
          } else {
            alert("Usuario no encontrado")
            console.log("Usuario no encontrado");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Por favor, completa todos los campos");
    }
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("sisisisisi");
  
    if (!formData.id || !formData.password) {
      alert("Por favor, completa todos los campos");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
          pass: formData.password,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Hubo un problema con la solicitud");
      }
  
      const data = await response.json();
  
      if (data.existe && data.correcto) {
        console.log("Usuario encontrado y contraseña correcta");
        navigate("/Admin");
      } else if (data.existe && !data.correcto) {
        console.log("Contraseña incorrecta");
        alert("Contraseña incorrecta");
      } else {
        console.log("Usuario no encontrado");
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con la solicitud");
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
            <ButtonLogin title="Iniciar Sesión" type="submit" />
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
  );
};
