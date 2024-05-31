import React, { useState } from "react";
import { ButtonAdmin } from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./administradorComponents";

import {
  faIdCard,
  faSackDollar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES } from "../rutasConst.js";
import {
  useUpdateEffect,
  handleChange,
  handleUpdateChange,
} from "../globalFunctions.js";

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

  useUpdateEffect(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    let method = "";
    let url = "";

    if (!formData.id || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      if (action === "Buscar") {
        url = `http://localhost:3000/api/habitacion/consultar/${formData.id}`;
        method = "GET";
        // Si la acción es actualizar se realiza una petición PUT
      } else if (action === "Actualizar") {
        // Si no se ha buscado la reserva se muestra un mensaje de alerta

        if (isSearched === false) {
          alert("Por favor busque una habitación antes de actualizar");
          return;
          // Si se ha buscado la reserva se verifica si se ha cambiado algún campo
        } else if (!isChanged) {
          alert(
            "Por favor cambie al menos un campo antes de actualizar la habitación"
          );
          return;
        }

        url = `http://localhost:3000/api/habitacion/actualizar`;
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
          .then((response) => {
            if (response.status === 200 && method === "PUT") {
              return alert("Habitación actualizada exitosamente");
            }
            if (!response.ok) {
              alert(
                "No se encontró una habitación con identificación: " +
                  formData.id
              );
              throw new Error("Error en la llamada al servidor");
            } else {
              return response.text();
            }
          })
          .then((data) => {
            if (data) {
              data = JSON.parse(data);

              alert("Habitación encontrada");
              setIsSearched(true);
              setFormData({
                id: data.rows[0].ID.toString(),
                tipo: data.rows[0].TIPO,
                precio: data.rows[0].PRECIO.toString(),
                estado: data.rows[0].ESTADO,
                capacidad: data.rows[0].CAPACIDAD.toString(),
                habilitado: data.rows[0].HABILITADO,
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        alert("Por favor seleccione una acción");
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
                  <h1>Crear Empleado</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
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
                  <div className="titles">
                    <h3>Información de la habitación</h3>
                  </div>
                  <div className="tipo">
                    <select
                      disabled={action !== "Actualizar"}
                      onChange={
                        action === "Actualizar"
                          ? handleLocalUpdateChange
                          : handleLocalChange
                      }
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
                        className="contact-input"
                        placeholder={
                          formData.precio !== "" ? formData.precio : "Precio"
                        }
                        name="Precio"
                        type="number"
                        value={formData.precio}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                      />
                    </div>
                  </div>
                  <div className="estado">
                    <select
                      disabled={action !== "Actualizar"}
                      onChange={
                        action === "Actualizar"
                          ? handleLocalUpdateChange
                          : handleLocalChange
                      }
                      value={formData.estado}
                      name="estado"
                    >
                      <option value="estado">Estado</option>
                      <option value="disponible">Disponible</option>
                      <option value="ocupado">Ocupado</option>
                      <option value="mantenimiento">Mantenimiento</option>
                    </select>
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
                      name="estado"
                    >
                      <option value="Habilitado">Habilitado</option>
                      <option value="True">True</option>
                      <option value="False">False</option>
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
                      value="Crear-empleado"
                      label="Buscar"
                      onClick={() => setAction("Buscar")}
                    />
                    <ButtonAdmin
                      type="submit"
                      value="Crear-empleado"
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
