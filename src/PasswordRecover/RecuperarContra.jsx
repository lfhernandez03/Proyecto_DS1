import React from "react";
import { TextFields } from "../Login/loginComponents";
import { ButtonLogin } from "../Login/loginComponents";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../rutasConst";

export const RecuperarContra = () => {

  const [formData, setFormData] = useState({
    id: ""
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
    if (formData.id) {
      fetch('http://localhost:3000/api/login/recuperarContra', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(async response => {
          console.log(response);
          if (!response.ok) throw new Error(await response.text());

          const data = await response.json();
          alert('Correo de recuperación enviado a ' + data.correo);
          navigate(ROUTES.LOGIN);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert(error.message);
        });

    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  return (
    <div className="recover-container">
      <h1>Recuperar contraseña</h1>
      <form onSubmit={handleSubmit}>
        <TextFields
          label="ID"
          name="id"
          type="text"
          value={formData.id}
          onChange={handleChange}
        />
        <ButtonLogin
          type="submit"
          value="Enviar"
          title="Enviar"
        />
      </form>
    </div>
  );
};
