import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
  BasicSelectTipo // Suponiendo que este es el componente que falta
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

    // Validación de campos
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
        <div className="forms" id="1">
          <h1>Formulario de Empleado</h1>
          <h3>Informacion del empleado</h3>
          <form onSubmit={handleSubmit}>
            <TextFieldsAdmin 
              label="Nombre" 
              name="nombre_empleado" 
              type="text"
              onChange={handleChange} />
            <TextFieldsAdmin 
              label="Identificación" 
              name="id" 
              type="number"
              onChange={handleChange} />
            <TextFieldsAdmin
              label="Correo electrónico"
              name="correo_electronico"
              type="email"
              onChange={handleChange}
            />
            <TextFieldsAdmin 
              label="Telefono" 
              name="telefono" 
              type="number"
              onChange={handleChange} />
            <TextFieldsAdmin
              label="Fecha inicio"
              name="fecha_inicio"
              type="date"
              onChange={handleChange}
            />
            <TextFieldsAdmin
              label="Fecha nacimiento"
              name="fecha_nacimiento"
              type="date"
              onChange={handleChange}
            />
            <TextFieldsAdmin 
              label="Salario" 
              name="salario" 
              type="number"
              onChange={handleChange} />
            <TextFieldsAdmin 
              label="Contraseña" 
              name="password" 
              type="password"
              onChange={handleChange} />
            <BasicSelectTipo />
            <div>
              <ButtonAdmin
                type="submit"
                value="crear-empleado"
                label="Crear Empleado"
              />
            </div>
          </form>
        </div>
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

    // Validación de campos
    if (
      formData.id || 
      formData.nombre_empleado || 
      formData.correo_electronico || 
      formData.password) {
      alert("Formulario válido. Redirigiendo...");
      navigate("/Admin");
    } else {
      alert("Por favor, completa al menos un campo");
    }
  };

  return (
    <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Búsqueda de Empleado</h1>
          <h3>Información del Empleado</h3>
          <form onSubmit={handleSubmit}>
            <div className="cuerpo-form">
              <TextFieldsAdmin 
                label="Identificación" 
                name="id" 
                type="number"
                onChange={handleChange} />
            </div>
            <h3>Información del Empleado</h3>
            <div className="cuerpo-form">
              <TextFieldsAdmin 
                label="Nombre empleado" 
                name="nombre_empleado" 
                type="text"
                onChange={handleChange} />
              <TextFieldsAdmin 
                label="Correo" 
                name="correo_electronico" 
                type="email"
                onChange={handleChange} />
              <BasicSelectTipo />
              <TextFieldsAdmin 
                label="Contraseña" 
                name="password" 
                type="password"
                onChange={handleChange} />
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
          </form>
        </div>
      </AdminLayout>
    </>
  );
};