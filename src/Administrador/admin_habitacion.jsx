import React, { useState, useEffect } from "react";
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
import { ROUTES } from '../rutasConst.js';

export const ContainerCrearHabitación = () => {
  const [formData, setFormData] = useState({
    tipo: "",
    precio: "",
    estado: "",
    capacidad: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/habitacion/insertar", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: formData.tipo,
          precio: formData.precio,
          estado: formData.estado,
          capacidad: formData.capacidad,
        }),
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Error en la llamada al servidor");
          } else {
            alert("Habitación creada exitosamente");
            navigate(ROUTES.ADMIN);
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

  return (
    <>
      <AdminLayout>
        <section className="form-container">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="form-heading">
                  <h1>Crear Empleado</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="tipo">
                    <select
                      onChange={handleChange}
                      value={formData.tipo}
                      name="tipo"
                    >
                      <option value="tipo">Tipo</option>
                      <option value="simple">Simple</option>
                      <option value="doble">Doble</option>
                      <option value="triple">Triple</option>
                    </select>
                  </div>
                  <div className="precio">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        className="contact-input"
                        value={formData.precio}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <select
                      onChange={handleChange}
                      value={formData.estado}
                      name="estado"
                    >
                      <option value="estado">Estado</option>
                      <option value="disponible">Disponible</option>
                      <option value="ocupado">Ocupado</option>
                      <option value="mantenimiento">Mantenimiento</option>
                    </select>
                  </div>
                  <div className="capacidad">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <Inputs
                        type="number"
                        name="capacidad"
                        placeholder="Capacidad"
                        className="contact-input"
                        value={formData.capacidad}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="submit"
                      value="Crear-empleado"
                      label="Crear"
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

export const ContainerBuscarHabitación = () => {
  const [formData, setFormData] = useState({
    id: "",
    tipo: "",
    precio: "",
    estado: "",
    capacidad: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*useEffect(() => {
    console.log(formData);
  }, [formData]);*/

  const handleSearch = (e) => {
    e.preventDefault();
    if (!formData || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      fetch("http://localhost:3000/api/habitacion/consultar", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
        }),
      })
        .then((response) => {
          console.log(response);
          console.log(formData);
          if (!response.ok) {
            throw new Error("Error en la llamada al servidor");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          if (data.rowCount > 0) {
            alert("Habitación encontrada");
            setFormData({
              id: data.rows[0].ID,
              tipo: data.rows[0].TIPO,
              precio: data.rows[0].PRECIO,
              estado: data.rows[0].ESTADO,
              capacidad: data.rows[0].CAPACIDAD,
            });
          } else {
            alert("Error al buscar la habitación");
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });
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
                  <h1>Crear Empleado</h1>
                </div>
                <form className="form" onSubmit={handleSearch}>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faIdCard} />
                      <Inputs
                        type="number"
                        name="id"
                        placeholder="Identificación"
                        className="contact-input"
                        value={formData.id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="tipo">
                    <select
                      onChange={handleChange}
                      readOnly={true}
                      value={formData.tipo}
                      name="tipo"
                    >
                      <option value="tipo">Tipo</option>
                      <option value="simple">Simple</option>
                      <option value="doble">Doble</option>
                      <option value="triple">Triple</option>
                    </select>
                  </div>
                  <div className="precio">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        type="number"
                        name="precio"
                        placeholder={
                          formData.precio !== "" ? formData.precio : "Precio"
                        }
                        className="contact-input"
                        value={formData.precio}
                        readOnly={true}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <select
                      onChange={handleChange}
                      readOnly={true}
                      value={formData.estado}
                      name="estado"
                    >
                      <option value="estado">Estado</option>
                      <option value="disponible">Disponible</option>
                      <option value="ocupado">Ocupado</option>
                      <option value="mantenimiento">Mantenimiento</option>
                    </select>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <Inputs
                        type="number"
                        name="capacidad"
                        placeholder={
                          formData.capacidad !== ""
                            ? formData.capacidad
                            : "Capacidad"
                        }
                        className="contact-input"
                        value={formData.capacidad}
                        readOnly={true}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="submit"
                      value="Crear-empleado"
                      label="Buscar"
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
