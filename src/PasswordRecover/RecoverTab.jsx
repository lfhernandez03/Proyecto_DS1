import React from "react";
import { TextFields } from "../Login/loginComponents";
import { ButtonLogin } from "../Login/loginComponents";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../rutasConst";

export const RecoverTab = () => {

  const [formData, setFormData] = useState({
    usuario: "",
    id: "",
    contraseña: "",
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
    if (formData.id && formData.usuario && formData.nuevaContraseña && formData.confirmarContraseña) {
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
          }

          return response.json();
        })
        .then(data => {
          console.log('Este mensaje debería salir al darle a iniciar sesión');

          if (data.success) {
            alert('Formulario válido. Redirigiendo...');
            navigate(ROUTES.LOGIN);
          } else {
            alert('Error: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  return (
    <div className="recover-container">
      <h1>Actualizar Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <TextFields
          label="Nombre de usuario"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
        />
        <TextFields
          label="Identificación"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
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
          value="Crear"
          title="Crear"
        />
      </form>
    </div>
  );
};
