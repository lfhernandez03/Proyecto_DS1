import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";

export const ContainerCrearEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre_empleado: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_inicio: "",
    fecha_nacimiento: "",
    salario: "",
    password: "",
    tipo: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validación de campos
    if (
      formData.nombre_empleado &&
      formData.id &&
      formData.correo_electronico &&
      formData.telefono &&
      formData.fecha_inicio &&
      formData.fecha_nacimiento &&
      formData.salario &&
      formData.password &&
      formData.tipo
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
        
          <h1>Formulario de Empleado</h1>
          <h3>Informacion del empleado</h3>
          <form onSubmit={handleSubmit}>
            <TextFieldsAdmin label="Nombre" name="name" type="name" />
            <TextFieldsAdmin label="Identificación" name="id" type="id" />
            <TextFieldsAdmin
              label="Correo electrónico"
              name="email"
              type="email"
            />
            <TextFieldsAdmin label="Telefono" name="tel" type="number" />
            <TextFieldsAdmin
              label="Fecha inicio"
              name="Fecha-begin"
              type="date"
            />
            <TextFieldsAdmin
              label="Fecha nacimiento"
              name="Fecha-nacimiento"
              type="date"
            />
            <TextFieldsAdmin label="Salario" name="salario" type="number" />
            <TextFieldsAdmin label="Contraseña" name="id" type="password" />
            <BasicSelectTipo />
          <div>
            <ButtonAdmin
              type="submit"
              value="crear-empleado"
              label="Crear Empleado"
            />
          </div>
          </form>
        
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre_empleado: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_inicio: "",
    fecha_nacimiento: "",
    salario: "",
    password: "",
    tipo: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validación de campos
    if (
      formData.nombre_empleado &&
      formData.id &&
      formData.correo_electronico &&
      formData.telefono &&
      formData.fecha_inicio &&
      formData.fecha_nacimiento &&
      formData.salario &&
      formData.password &&
      formData.tipo
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
          <h1>Busqueda de Empleado</h1>
          <h3>Información del Empleado</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Identificación" name="id" type="number" />
          </div>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Nombre empleado" name="name" type="name" />
            <TextFieldsAdmin label="Correo" name="correo" type="email" />
            <BasicSelectTipo />
            <TextFieldsAdmin label="Contraseña" name="id" type="password" />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-empleado"
              label="Eliminar"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-empleado"
              label="Modificar"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
