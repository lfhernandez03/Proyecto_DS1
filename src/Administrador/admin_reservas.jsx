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
                    <Inputs
                      className="contact-input"
                      name="nombre_cliente"
                      type="text"
                      value={formData.nombre_cliente}
                      placeholder="Nombre"
                      onChange={handleChange}
                    />
                    <Inputs
                      className="contact-input"
                      placeholder="Identificación"
                      name="id"
                      type="number"
                      value={formData.id}
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
                  <div className="titles">
                    <h3>Información de la reserva</h3>
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

            <div className="right">
              <div className="image-wrapper">
                <img
                  className="img"
                  src="src\Multimedia\right.png"
                  alt="img-reservas"
                />
                <div className="wave-wrap">
                  <svg
                    className="wave"
                    viewBox="0 0 783 1536"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="wave"
                      d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                      fill="#D9D9D9"
                      stroke="white"
                    />
                  </svg>
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
