import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";


export const ContainerCrearHabitación = () => {
    const[formData, setFormData] = useState({
        TIPO: "",
        ID: "",
        CAPACIDAD: "",
        PRECIO: "",
        ESTADO: "",
 });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            formData.TIPO &&
            formData.ID &&
            formData.CAPACIDAD &&
            formData.PRECIO &&
            formData.ESTADO
        ) {
            alert("Formulario válido. Redirigiendo...");
            navigate("/Admin");
        } else {
        alert("Por favor, completa todos los campos");
        }
    };

    return (
        <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Formulario de Habitacion</h1>
          <h3>Información de la Habitación</h3>
          <form onSubmit={handleSubmit}>
            <TextFieldsAdmin 
            label="Tipo Habitación" 
            name="TIPO" 
            type="text" 
            onChange={handleChange}
            />
            <TextFieldsAdmin 
            label="Id" 
            name="ID" 
            type="number"
            onChange={handleChange}
            />
            <TextFieldsAdmin 
            label="Capacidad" 
            name="CAPACIDAD" 
            type="number"
            onChange={handleChange} 
            />
            <TextFieldsAdmin 
            label="Precio" 
            name="PRECIO" 
            type="number" 
            onChange={handleChange}
            />
            <BasicSelect />
          <div>
          <ButtonAdmin
            type="submit"
            value="crear_habitacion"
            label="Crear Habitación"
          />
        </div>
        </form>
        </div>
      </AdminLayout>
    </>
    );
};


export const ContainerBuscarHabitación = () => {
    const [ formData, setFormData] = useState({
        TIPO: "",
        ID: "",
        CAPACIDAD: "",
        PRECIO: "",
        ESTADO: "",
    });

    const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(
        formData.TIPO &&
        formData.ID &&
        formData.CAPACIDAD &&
        formData.PRECIO &&
        formData.ESTADO
    ) {
        alert("Formulario válido. Redirigiendo...");
        navigate("/Admin");
    } else {
        alert("por favor, completa todos los campos");
    }
  };
  return (
    <>
      <AdminLayout>
      <div className="forms" id="2">
          <h1>Busqueda de Habitación</h1>
          <h3>Información de la habitación</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin 
            label="Identificación" 
            name="ID" 
            type="number" />
          </div>
          <h3>Informacion de la habitacion</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin 
            label="Tipo" 
            name="TIPO" 
            type="type" />
            <TextFieldsAdmin 
            label="Capacidad" 
            name="CAPACIDAD" 
            type="number" />
            <TextFieldsAdmin 
            label="Precio" 
            name="PRECIO" 
            type="number" />
            <BasicSelect />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-habitacion"
              label="Eliminar"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-habitacion"
              label="Modificar"
            />
          </div>
          </div>
      </AdminLayout>
    </>
  );
};