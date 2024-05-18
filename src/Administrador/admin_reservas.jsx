import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
  Inputs,
  SelectBoxReserva,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import {
  faIdCard,
  faUser,
  faEnvelope,
  faPhone,
  faCalendarDays,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        name="nombre_cliente"
                        type="text"
                        value={formData.nombre_cliente}
                        placeholder="Nombre"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faIdCard} />
                      <Inputs
                        className="contact-input"
                        placeholder="Identificación"
                        name="id"
                        type="number"
                        value={formData.id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Inputs
                        className="contact-input"
                        placeholder="Correo electrónico"
                        name="correo_electronico"
                        type="email"
                        value={formData.correo_electronico}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="telefono">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPhone} />
                      <Inputs
                        className="contact-input"
                        placeholder="Teléfono"
                        name="telefono"
                        type="number"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="titles">
                    <h3>Información de la reserva</h3>
                  </div>
                  <div className="title-date">
                    <h4>Fecha entrada </h4>
                    <h4>Fecha salida</h4>
                  </div>
                  <div className="fechas">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_entrada"
                        type="date"
                        value={formData.fecha_entrada}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_salida"
                        type="date"
                        value={formData.fecha_salida}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="id-reserva">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faBook} />
                      <Inputs
                        className="reserva-input"
                        placeholder="ID de la reserva"
                        name="id_reserva"
                        type="id"
                        value={formData.id_reserva}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="status">
                    <SelectBoxReserva value={formData.estado} />
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Crear-reserva"
                    label="Crear reserva"
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
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faIdCard} />
                      <Inputs
                        className="contact-input"
                        placeholder="Identificación"
                        name="id"
                        type="number"
                        value={formData.id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="titles">
                    <h3>Información de la reserva</h3>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        name="nombre_cliente"
                        type="text"
                        placeholder="Nombre"
                        value={formData.nombre_cliente}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="telefono">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faPhone} />
                        <Inputs
                          className="contact-input"
                          placeholder="Teléfono"
                          name="telefono"
                          type="number"
                          value={formData.telefono}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Inputs
                        className="contact-input"
                        placeholder="Correo electrónico"
                        name="correo_electronico"
                        type="email"
                        value={formData.correo_electronico}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="title-date">
                    <h4>Fecha entrada </h4>
                    <h4>Fecha salida</h4>
                  </div>
                  <div className="fechas">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_entrada"
                        type="text"
                        value={formData.fecha_entrada}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_salida"
                        type="text"
                        value={formData.fecha_salida}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="id-reserva">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faBook} />
                      <Inputs
                        className="reserva-input"
                        placeholder="ID de la reserva"
                        name="id_reserva"
                        type="id"
                        value={formData.id_reserva}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="status">
                    <SelectBoxReserva value={formData.estado} />
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Crear-reserva"
                    label="Crear reserva"
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
