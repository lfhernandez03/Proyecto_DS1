import React, { useState } from "react";
import {
  ButtonAdmin,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./administradorComponents";
import {
  faIdCard,
  faUser,
  faEnvelope,
  faPhone,
  faCalendarDays,
  faSackDollar,
  faLock,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES } from '../rutasConst.js';
import { useUpdateEffect, handleChange, handleUpdateChange } from "../globalFunctions.js";

export const ContainerCrearEmpleado = () => {
  const [formData, setFormData] = useState({
    id: "",
    contrasenia: "",
    correo: "",
    nombre: "",
    fecha_nacimiento: "",
    direccion: "",
    salario: "",
    telefono: "",
    tipo: "",
    fecha_inicio: "",
  });

  const handleLocalChange = handleChange(setFormData, formData);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/empleado/insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
          contrasenia: formData.contrasenia,
          correo: formData.correo,
          nombre: formData.nombre,
          fecha_nacimiento: formData.fecha_nacimiento,
          direccion: formData.direccion,
          salario: formData.salario,
          telefono: formData.telefono,
          fecha_inicio: formData.fecha_inicio,
        }),
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Error en la llamada al servidor");
          } else {
            alert("Empleado creado exitosamente");
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
                    <h3>Información del empleado</h3>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        placeholder="Nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleLocalChange}
                      />
                    </div>
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
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Inputs
                        className="contact-input"
                        placeholder="Correo electrónico"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleLocalChange}
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
                        value={formData.telefono}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="direccion">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faMapLocationDot} />
                      <Inputs
                        className="contact-input"
                        placeholder="Dirección"
                        name="direccion"
                        type="text"
                        value={formData.direccion}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="tipo1">
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleLocalChange}
                    >
                      <option value="">Tipo</option>
                      <option value="Empleado">Empleado</option>
                      <option value="Administrador">Administrador</option>
                    </select>
                  </div>
                  <div className="title-date">
                    <h4>Fecha entrada </h4>
                    <h4>Fecha de nacimiento</h4>
                  </div>
                  <div className="fechas">
                    <Inputs
                      className="fechas-input"
                      name="fecha_inicio"
                      type="date"
                      value={formData.fecha_inicio}
                      onChange={handleLocalChange}
                    />
                    <Inputs
                      className="fechas-input"
                      name="fecha_nacimiento"
                      type="date"
                      value={formData.fecha_nacimiento}
                      onChange={handleLocalChange}
                    />
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        className="contact-input"
                        placeholder="Salario"
                        name="salario"
                        type="number"
                        value={formData.salario}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faLock} />
                      <Inputs
                        className="contact-input"
                        placeholder="Contraseña"
                        name="contrasenia"
                        type="text"
                        value={formData.contrasenia}
                        onChange={handleLocalChange}
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

export const ContainerBuscarEmpleado = () => {
  const [formData, setFormData] = useState({
    id: "",
    contrasenia: "",
    correo: "",
    nombre: "",
    fecha_nacimiento: "",
    direccion: "",
    salario: "",
    telefono: "",
    tipo: "",
    fecha_inicio: "",
  });

  const handleLocalChange = handleChange(setFormData, formData);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!formData || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      fetch("http://localhost:3000/api/empleado/consultar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            alert(
              "No se encontró un empleado con identificación: " + formData.id
            );
            throw new Error("Error en la llamada al servidor");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          if (data.rowCount > 0) {
            alert("Empleado encontrado");
            setFormData({
              id: data.rows[0].ID,
              nombre: data.rows[0].NOMBRE,
              correo: data.rows[0].CORREO,
              telefono: data.rows[0].TELEFONO,
              direccion: data.rows[0].DIRECCION,
              fecha_nacimiento: data.rows[0].FECHA_NACIMIENTO,
              fecha_inicio: data.rows[0].FECHA_INICIO,
              salario: data.rows[0].SALARIO,
              tipo: data.rows[0].TIPO,
            });
          } else {
            alert("Error al buscar el empleado");
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
                  <h1>Buscar Empleado</h1>
                </div>
                <form className="form" onSubmit={handleSearch}>
                  <div className="titles">
                    <h3>Información del empleado</h3>
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
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.nombre !== "" ? formData.nombre : "Nombre"
                        }
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.correo !== ""
                            ? formData.correo
                            : "Correo Electrónico"
                        }
                        name="correo"
                        type="email"
                        value={formData.correo}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="telefono">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faPhone} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.telefono !== ""
                            ? formData.telefono
                            : "Teléfono"
                        }
                        name="telefono"
                        type="number"
                        value={formData.telefono}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="direccion">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faMapLocationDot} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.direccion !== ""
                            ? formData.direccion
                            : "Dirección"
                        }
                        name="direccion"
                        type="text"
                        value={formData.direccion}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <select
                      onChange={handleLocalChange}
                      readOnly={true}
                      value={formData.tipo}
                      name="tipo"
                    >
                      <option value="">Tipo</option>
                      <option value="Empleado">Empleado</option>
                      <option value="Administrador">Administrador</option>
                    </select>
                  </div>
                  <div className="title-date">
                    <h4>Fecha entrada </h4>
                    <h4>Fecha de nacimiento</h4>
                  </div>
                  <div className="fechas">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_inicio"
                        placeholder={
                          formData.fecha_inicio !== ""
                            ? formData.fecha_inicio
                            : "Fecha de Inicio"
                        }
                        type="text"
                        value={formData.fecha_inicio}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_nacimiento"
                        placeholder={
                          formData.fecha_nacimiento !== ""
                            ? formData.fecha_nacimiento
                            : "Fecha de Nacimiento"
                        }
                        type="text"
                        value={formData.fecha_nacimiento}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="salario">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.salario !== "" ? formData.salario : "Salario"
                        }
                        name="salario"
                        type="number"
                        value={formData.salario}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="contraseña">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faLock} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.contrasenia !== ""
                            ? formData.contrasenia
                            : "Contraseña"
                        }
                        name="contrasenia"
                        type="text"
                        value={formData.contrasenia}
                        readOnly={true}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="submit"
                      value="buscar-empleado"
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
