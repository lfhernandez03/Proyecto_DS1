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
import {
  faIdCard,
  faUser,
  faEnvelope,
  faPhone,
  faCalendarDays,
  faSackDollar,
  faLock,
  faList,
  faPassport,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerCrearHabitación = () => {
  const [formData, setFormData] = useState({
    tipo: "",
    id_habitacion: "",
    capacidad: "",
    precio: "",
    estado: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.tipo &&
      formData.id_habitacion &&
      formData.capacidad &&
      formData.precio &&
      formData.estado
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
                  <h1>Crear Habitación</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faList} />
                      <Inputs
                        className="contact-input"
                        name="tipo-habitacion"
                        type="text"
                        placeholder="Tipo de habitación"
                        value={formData.tipo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPassport} />
                      <Inputs
                        className="contact-input"
                        placeholder="ID"
                        name="id"
                        type="number"
                        value={formData.id_habitacion}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <Inputs
                        className="contact-input"
                        placeholder="Capacidad"
                        name="Capacidad"
                        type="text"
                        value={formData.capacidad}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="telefono">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        className="contact-input"
                        placeholder="Precio"
                        name="Precio"
                        type="number"
                        value={formData.precio}
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
  const [formData, setFormData] = useState({
    tipo: "",
    id_habitacion: "",
    capacidad: "",
    precio: "",
    estado: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.tipo &&
      formData.id_habitacion &&
      formData.capacidad &&
      formData.precio &&
      formData.estado
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
                  <div className="input-wrap">
                    <div className="id">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faPassport} />
                        <Inputs
                          className="contact-input"
                          placeholder="ID"
                          name="id"
                          type="number"
                          value={formData.id_habitacion}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faList} />
                      <Inputs
                        className="contact-input"
                        name="tipo-habitacion"
                        type="text"
                        placeholder="Tipo de habitación"
                        value={formData.tipo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="capacidad">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <Inputs
                          className="contact-input"
                          placeholder="Capacidad"
                          name="Capacidad"
                          type="text"
                          value={formData.capacidad}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="precio">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faSackDollar} />
                        <Inputs
                          className="contact-input"
                          placeholder="Precio"
                          name="Precio"
                          type="number"
                          value={formData.precio}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="status">
                      <SelectBoxReserva value={formData.estado} />
                    </div>
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
