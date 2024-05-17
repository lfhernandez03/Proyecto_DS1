import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./administradorComponents";
import { SelectBoxReserva } from "./administradorComponents";

export const ContainerCrearHabitación = () => {
 
  return (
    <>
      <AdminLayout>
        <section className="form-container">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="form-heading">
                  <h1>Crear Habitación</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="input-wrap">
                    <Inputs
                      className="contact-input"
                      name="tipo-habitacion"
                      type="text"
                      placeholder="Tipo de habitación"
                      value={formData.tipo}
                      onChange={handleChange}
                    />
                    <Inputs
                      className="contact-input"
                      placeholder="ID"
                      name="id"
                      type="number"
                      value={formData.id_habitacion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="correo">
                    <Inputs
                      className="contact-input"
                      placeholder="Capacidad"
                      name="Capacidad"
                      type="text"
                      value={formData.capacidad}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="telefono">
                    <Inputs
                      className="contact-input"
                      placeholder="Precio"
                      name="Precio"
                      type="number"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="status">
                    <SelectBoxReserva value={formData.estado}/>
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Crear-hbitacion"
                    label="Crear"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarHabitación = () => {
 
  return (
    <>
      <AdminLayout>
        <section className="form-container">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="form-heading">
                  <h1>Crear Habitación</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Buscar por ID</h3>
                  </div>
                  <div className="id">
                    <Inputs
                      className="contact-input"
                      placeholder="ID"
                      name="id"
                      type="number"
                      value={formData.id_habitacion}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="input-wrap">
                    <Inputs
                      className="contact-input"
                      name="tipo-habitacion"
                      type="text"
                      placeholder="Tipo de habitación"
                      value={formData.tipo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="capacidad">
                    <Inputs
                      className="contact-input"
                      placeholder="Capacidad"
                      name="Capacidad"
                      type="text"
                      value={formData.capacidad}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="precio">
                    <Inputs
                      className="contact-input"
                      placeholder="Precio"
                      name="Precio"
                      type="number"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="status">
                    <SelectBoxReserva value={formData.estado} />
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Crear-hbitacion"
                    label="Crear"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};
