import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
  Inputs,
  SelectBoxReserva,
  SelectBoxReservaCliente,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import { Input, TextField } from "@mui/material";

export const ContainerCrearReserva = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre_cliente: "",
    telefono: "",
    residencia: "",
    tipo: "",
    correo_electronico: "",
    fecha_entrada: "",
    fecha_salida: "",
    id_reserva: "",
    estado: "",
    precio: "",
    descripcion: "",
    habitacion: "",
    empleado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentFormData) => {
      const updatedFormData = { ...currentFormData, [name]: value };
      return updatedFormData;
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/reserva/insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            reserva: {
              estado: formData.estado,
              f_entrada: formData.fecha_entrada,
              f_salida: formData.fecha_salida,
              id_Cliente: formData.id,
              descripcion: formData.descripcion,
              precio: formData.precio,
              id_Habitacion: formData.habitacion,
              id_Empleado: formData.empleado
            },
            cliente: {
              id: formData.id,
              nombre: formData.nombre_cliente,
              correo: formData.correo_electronico,
              telefono: formData.telefono,
              residencia: formData.residencia,
              tipo: formData.tipo
            }
          }
        })
      })
      .then((response => {
          console.log(response);
          if(!response.ok){
            throw new Error("Error en la llamada al servidor");
          }
          return response.json();
        }))
        .then((data) => {
          console.log(data);
          if (data.existe & data.correcto) {
            alert("Reserva creada exitosamente");
            navigate("/admin");
          } else if (data.existe & !data.correcto) {
            alert(
              "Error al crear la reserva",
              console.log("Error al crear la reserva")
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log(formData);
      alert("Por favor, completa todos los campos");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!formData || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      setFormData({
        ...formData,
        id: formData.id,
      }),
        console.log("Buscando información del cliente con id: ", formData.id);
    }
  };

  return (
    <>
      <AdminLayout>
        <section className="form-container">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="form-heading">
                  <h1>Crear Reserva</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información del cliente</h3>
                  </div>
                  <div className="buscar-id">
                    <Inputs
                      className="contact-input"
                      placeholder="Identificación"
                      name="id"
                      type="text"
                      id="id"
                      value={formData.id}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="buscar-boton">
                    <input
                      type="button"
                      value="Buscar"
                      className="buscar-button"
                      
                    />
                  </div>
                  <div className="input-wrap">
                    <Inputs
                      className="contact-input"
                      name="nombre_cliente"
                      type="text"
                      id="nombre_cliente"
                      value={formData.nombre_cliente}
                      placeholder="Nombre"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="telefono">
                    <Inputs
                      className="contact-input"
                      placeholder="Teléfono"
                      name="telefono"
                      type="number"
                      id="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="residencia">
                    <Inputs
                      className="contact-input"
                      placeholder="Residencia"
                      name="residencia"
                      type="text"
                      id="residencia"
                      value={formData.residencia}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="tipo">
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                    >
                      <option value="">Tipo</option> 
                      <option value="Corriente">Corriente</option>
                      <option value="Ejecutivo">Ejecutivo</option>
                    </select>
                  </div>
                  <div className="correo">
                    <Inputs
                      id="correo_electronico"
                      className="contact-input"
                      placeholder="Correo electrónico"
                      name="correo_electronico"
                      type="email"
                      value={formData.correo_electronico}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="titles">
                    <h3>Información de la reserva</h3>
                  </div>
                  <div className="fechas">
                    <Inputs
                      id="fecha_entrada"
                      className="fechas-input"
                      name="fecha_entrada"
                      type="date"
                      value={formData.fecha_entrada}
                      onChange={handleChange}
                    />
                    <Inputs
                      id="fecha_salida"
                      className="fechas-input"
                      name="fecha_salida"
                      type="date"
                      value={formData.fecha_salida}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="id-reserva">
                    <Inputs
                      id="id_reserva"
                      className="reserva-input"
                      placeholder="ID de la reserva"
                      name="id_reserva"
                      type="id"
                      value={formData.id_reserva}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="status">
                    <select
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                    >
                      <option value="">Estado</option>
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="Terminado">Terminado</option>
                    </select>
                  </div>
                  <div className="precio">
                    <Inputs
                      id="precio"
                      className="contact-input"
                      placeholder="Precio"
                      name="precio"
                      type="number"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="habitacion">
                    <Inputs
                      id="habitacion"
                      className="contact-input"
                      placeholder="Habitación"
                      name="habitacion"
                      type="text"
                      value={formData.habitacion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="empleado">
                    <Inputs
                      id="empleado"
                      className="contact-input"
                      placeholder="Id empleado"
                      name="empleado"
                      type="text"
                      value={formData.empleado}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="descripcion">
                    <Inputs
                      id="descripcion"
                      className="contact-input"
                      placeholder="Descripción"
                      name="descripcion"
                      type="text"
                      value={formData.descripcion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin value="Crear-reserva" label="Crear reserva" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarReserva = () => {
  return (
    <>
      <AdminLayout>
        <section className="form-container">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="form-heading">
                  <h1>Buscar</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información del cliente</h3>
                  </div>
                  <div className="input-wrap">
                    <Inputs
                      className="contact-input"
                      placeholder="Identificación"
                      name="id"
                      type="number"
                      value={formData.id}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="titles">
                    <h3>Información de la reserva</h3>
                  </div>
                  <Inputs
                    className="contact-input"
                    name="nombre_cliente"
                    type="text"
                    placeholder="Nombre"
                    value={formData.nombre_cliente}
                    onChange={handleChange}
                  />
                  <div className="telefono">
                    <Inputs
                      className="contact-input"
                      placeholder="Teléfono"
                      name="telefono"
                      type="number"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="correo">
                    <Inputs
                      className="contact-input"
                      placeholder="Correo electrónico"
                      name="correo_electronico"
                      type="email"
                      value={formData.correo_electronico}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fechas">
                    <Inputs
                      className="fechas-input"
                      name="fecha_entrada"
                      type="date"
                      value={formData.fecha_entrada}
                      onChange={handleChange}
                    />
                    <Inputs
                      className="fechas-input"
                      name="fecha_salida"
                      type="date"
                      value={formData.fecha_salida}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="id-reserva">
                    <Inputs
                      className="reserva-input"
                      placeholder="ID de la reserva"
                      name="id_reserva"
                      type="id"
                      value={formData.id_reserva}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="status">
                    <SelectBoxReserva value={formData.estado} />
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="submit"
                      value="Crear-reserva"
                      label="Crear reserva"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};
