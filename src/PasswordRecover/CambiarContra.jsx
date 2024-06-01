import React from "react";
import { TextFields } from "../Login/loginComponents";
import { ButtonLogin } from "../Login/loginComponents";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../rutasConst";

export const CambiarContra = () => {

  const [formData, setFormData] = useState({
    nuevaContraseña: "",
    confirmarContraseña: ""
  })

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // si estan correctos hacer la llamada al backend para valdiar el usuario 
    // si la respuesta es exitosa redireccionar a home
    // si no es exitosa mostrar el error
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (formData.nuevaContraseña && formData.confirmarContraseña) {
      fetch('http://localhost:3000/api/login/cambiarContra', {
        method: 'PUT',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          passNuevo: formData.nuevaContraseña,
        }),
      })
        .then(async response => {
          if (!response.ok) throw new Error(await response.text());

          alert('Contraseña actualizada. Por favor, vuelve a iniciar sesión...');
          navigate(ROUTES.LOGIN);
        })
        .catch((error) => {
          alert(error.message)
        });
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  return (
    <div className="recover-container">
      <h1>Actualizar contraseña</h1>
      <form onSubmit={handleSubmit}>
        <TextFields
          label="Nueva Contraseña"
          name="nuevaContraseña"
          type="password"
          value={formData.nuevaContraseña}
          onChange={handleChange}
        />
        <TextFields
          label="Confirmar Contraseña"
          name="confirmarContraseña"
          type="password"
          value={formData.confirmarContraseña}
          onChange={handleChange}
        />
        <ButtonLogin
          type="submit"
          value="Cambiar contraseña"
          title="Cambiar contraseña"
        />
      </form>
    </div>
  );
};
