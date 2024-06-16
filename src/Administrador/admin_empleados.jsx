import React, { useState } from "react";
import { ButtonAdmin } from "./administradorComponents";
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
import { ROUTES } from "../rutasConst.js";
import {
  useUpdateEffect,
  handleChange,
  handleUpdateChange,
} from "../globalFunctions.js";

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
    admin: false,
    fecha_inicio: "",
  });

  const handleLocalChange = handleChange(setFormData, formData);

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? true : false,
    });
  };


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reorderedFormData = {
      id: formData.id,
      ...formData,
    };

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/empleado/insertar", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: reorderedFormData.id,
          contrasenia: reorderedFormData.contrasenia,
          correo: reorderedFormData.correo,
          nombre: reorderedFormData.nombre,
          fecha_nacimiento: reorderedFormData.fecha_nacimiento,
          direccion: reorderedFormData.direccion,
          salario: reorderedFormData.salario,
          telefono: reorderedFormData.telefono,
          fecha_inicio: reorderedFormData.fecha_inicio,
          admin: reorderedFormData.admin,
        }),
      })
        .then(async (response) => {
          console.log(response);
          if (!response.ok) throw new Error(await response.text());

          alert("Empleado creado exitosamente.");
          navigate(ROUTES.ADMIN);
        })
        .catch((error) => {
          alert(error.message)
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
                  <h1>Crear empleado</h1>
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
                    <input
                      id="admin"
                      type="checkbox"
                      name="admin"
                      checked={formData.admin}
                      onChange={handleCheckboxChange}

                    />
                    <label htmlFor="admin">Admin</label>

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
    admin: false,
    fecha_inicio: "",
    habilitado: "",
  });

  const handleLocalChange = handleChange(setFormData, formData);
  
  const [action, setAction] = useState(null);

  const [isSearched, setIsSearched] = useState(false);

  const [isChanged, setIsChanged] = useState(false);

  const handleLocalUpdateChange = handleUpdateChange(
    setIsChanged,
    setFormData,
    formData
  );

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? true : false,
    });
    setIsChanged(true);
  };

  useUpdateEffect(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    let method = "";
    let url = "";

    if (!formData.id || formData.id === "") {
      alert("Por favor, ingrese una identificación.");
    } else {
      if (action === "Buscar") {
        url = `http://localhost:3000/api/empleado/consultar/${formData.id}`;
        method = "GET";
        // Si la acción es actualizar se realiza una petición PUT
      } else if (action === "Actualizar") {
        // Si no se ha buscado la reserva se muestra un mensaje de alerta

        if (isSearched === false) {
          alert("Por favor busque un empleado antes de actualizar");
          return;
          // Si se ha buscado la reserva se verifica si se ha cambiado algún campo
        } else if (!isChanged) {
          alert(
            "Por favor cambie al menos un campo antes de actualizar el empleado"
          );
          return;
        }

        url = `http://localhost:3000/api/empleado/actualizar`;
        method = "PUT";
      }

      if (method !== "") {
        fetch(url, {
          method: method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: method === "PUT" ? JSON.stringify(formData) : null,
        })
          .then(async (response) => {
            if (!response.ok) throw new Error(await response.text());
            if (method === "PUT") return alert("Empleado actualizado exitosamente.");

            return response.text();
          })
          .then((data) => {
            if (data) {
              data = JSON.parse(data);

              alert("Empleado encontrado.");
              setIsSearched(true);
              setFormData({
                id: data.rows[0].ID.toString(),
                contrasenia: data.rows[0].CONTRASENIA,
                correo: data.rows[0].CORREO,
                nombre: data.rows[0].NOMBRE,
                fecha_nacimiento: data.rows[0].FECHA_NACIMIENTO,
                direccion: data.rows[0].DIRECCION,
                salario: data.rows[0].SALARIO.toString(),
                telefono: data.rows[0].TELEFONO.toString(),
                admin: data.rows[0].ADMIN,
                fecha_inicio: data.rows[0].FECHA_INICIO,
                habilitado: data.rows[0].HABILITADO,
              });
            }
          })
          .catch((error) => {
            alert(error.message)
          });
      } else {
        alert("Por favor, seleccione una acción.");
      }
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
                  <h1>Buscar empleado</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información del empleado</h3>
                  </div>
                  <div className="buscar-id">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faIdCard} />
                      <Inputs
                        className="contact-input"
                        placeholder="Identificación"
                        name="id"
                        type="number"
                        value={formData.id}
                        onChange={
                          action === "Buscar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                      />
                    </div>
                  </div>
                  <div className="tipo">
                      <input
                    id="admin"
                    type="checkbox"
                    name="admin"
                    disabled={action !== "Actualizar"}
                    checked={formData.admin}
                    onChange={action === "Actualizar" ? handleCheckboxChange : undefined}
          
                    />  
                    <label htmlFor ="admin">Admin</label>
                  </div>
                  <div className="habilitado">
                    <select
                      disabled={action !== "Actualizar"}
                      onChange={
                        action === "Actualizar"
                          ? handleLocalUpdateChange
                          : handleLocalChange
                      }
                      value={formData.habilitado}
                      name="habilitado"
                    >
                      <option value="">Habilitado</option>
                      <option value="True">True</option>
                      <option value="False">False</option>
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
                        type="date"
                        value={formData.fecha_inicio}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        type="date"
                        value={formData.fecha_nacimiento}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
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
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                      />
                    </div>
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="submit"
                      value="buscar-empleado"
                      label="Buscar"
                      onClick={() => setAction("Buscar")}
                    />
                    <ButtonAdmin
                      type="button"
                      value="actualizar-empleado"
                      label="Actualizar"
                      onClick={() => setAction("Actualizar")}
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
