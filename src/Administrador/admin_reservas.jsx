import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";

export const ContainerCrearReserva = () => {
  const [formData, setFormData] = useState({
    nombre_cliente: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_entrada: "",
    fecha_salida: "",
    estado: "",
    id_reserva: "",
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
      formData.nombre_cliente &&
      formData.id &&
      formData.correo_electronico &&
      formData.telefono &&
      formData.fecha_entrada &&
      formData.fecha_salida &&
      formData.estado &&
      formData.id_reserva
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
          <h1>Formulario de Reserva</h1>
          <h3>Informacion del cliente</h3>
          <form onSubmit={handleSubmit}>
            <TextFieldsAdmin
              label="Nombre"
              name="name"
              type="name"
              onChange={handleChange}
            />
            <TextFieldsAdmin
              label="Identificación"
              name="id"
              type="id"
              onChange={handleChange}
            />
            <TextFieldsAdmin
              label="Correo electrónico"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <TextFieldsAdmin
              label="Telefono"
              name="tel"
              type="number"
              onChange={handleChange}
            />
            <h3>Informacion de la reserva</h3>
            <TextFieldsAdmin
              label="Fecha entrada"
              name="Fecha-in"
              type="date"
              onChange={handleChange}
            />
            <TextFieldsAdmin
              label="Fecha salida"
              name="Fecha-out"
              type="date"
              onChange={handleChange}
            />
            <BasicSelect />
            <TextFieldsAdmin
              label="ID"
              name="id"
              type="number"
              onChange={handleChange}
            />
            <div>
              <ButtonAdmin
                type="submit"
                value="Reservar"
                label="Hacer reserva"
              />
            </div>
          </form>
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarReserva = () => {
  const [formData, setFormData] = useState({
    nombre_cliente: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_entrada: "",
    fecha_salida: "",
    estado: "",
    id_reserva: "",
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
      formData.nombre_cliente &&
      formData.id &&
      formData.correo_electronico &&
      formData.telefono &&
      formData.fecha_entrada &&
      formData.fecha_salida &&
      formData.estado &&
      formData.id_reserva
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
          <h1>Busqueda de Reserva</h1>
          <h3>Informacion del cliente</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Identificación" name="id" type="number" />
          </div>
          <h3>Informacion de la reserva</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin
              label="Fecha entrada"
              name="Fecha-in"
              type="date"
            />
            <TextFieldsAdmin
              label="Fecha salida"
              name="Fecha-out"
              type="date"
            />
            <BasicSelect />
            <TextFieldsAdmin label="ID" name="id" type="id" />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-reserva"
              label="Eliminar reserva"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-reserva"
              label="Modificar reserva"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
