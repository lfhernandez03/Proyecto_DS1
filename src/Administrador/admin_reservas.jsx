import React, { useEffect, useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelect,
  Inputs,
  SelectBoxReserva,
  SelectBoxReservaCliente,
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate, useLocation } from "react-router-dom";
import {
  handleChange,
  handleUpdateChange,
  useUpdateEffect,
} from "../globalFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSackDollar,
  faIdCard,
  faEnvelope,
  faPhone,
  faLock,
  faCalendarDays,
  faHouseUser,
  faPassport,
  faHashtag,
  faDoorClosed,
  faUserTie,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../rutasConst.js";

export const ContainerCrearReserva = () => {
  const initialState = {
    id: "",
    nombre_cliente: "",
    telefono: "",
    residencia: "",
    tipo: "",
    correo_electronico: "",
    f_entrada: "",
    f_salida: "",
    id_reserva: "",
    estado: "",
    precio: "",
    descripcion: "",
    habitacion: "",
    empleado: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleLocalChange = handleChange(setFormData, formData);

  const navigate = useNavigate();
  const location = useLocation();

  useUpdateEffect(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/reserva/insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          reserva: {
            estado: formData.estado,
            f_entrada: formData.fecha_entrada,
            f_salida: formData.fecha_salida,
            id_Cliente: formData.id,
            descripcion: formData.descripcion,
            precio: formData.precio,
            id_Habitacion: formData.habitacion,
            id_Empleado: formData.empleado,
          },
          cliente: {
            id: formData.id,
            nombre: formData.nombre_cliente,
            correo: formData.correo_electronico,
            telefono: formData.telefono,
            residencia: formData.residencia,
            tipo: formData.tipo,
          },
        }),
      })
        .then(async (response) => {
          if (!response.ok) throw new Error(await response.text());

          const data = await response.json();
          alert("Reserva creada exitosamente con ID " + data.id + ".");
          location.pathname === ROUTES.RESERVA_INSERTAR_EMP
            ? navigate(ROUTES.EMPLEADOS)
            : navigate(ROUTES.ADMIN);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    let url = `http://localhost:3000/api/cliente/consultar/${formData.id}`;

    if (!formData.id || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(text);
            });
          } else return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.rowCount > 0) {
            alert("Cliente encontrado");
            setFormData({
              id: data.rows[0].ID,
              nombre_cliente: data.rows[0].NOMBRE,
              correo_electronico: data.rows[0].CORREO,
              telefono: data.rows[0].TELEFONO,
              residencia: data.rows[0].RESIDENCIA,
              tipo: data.rows[0].TIPO,
            });
          } else {
            alert("Error al buscar el cliente");
          }
        })

        .catch((error) => {
          alert(error.message);
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
                  <h1>Crear Reserva</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información del cliente</h3>
                  </div>
                  <div className="buscar-id">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faIdCard} />
                      <Inputs
                        className="contact-input"
                        placeholder="Identificación"
                        name="id"
                        type="text"
                        id="id"
                        value={formData.id}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="buscar-boton">
                    <input
                      type="button"
                      value="Buscar"
                      className="buscar-button"
                      onClick={handleSearch}
                    />
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        name="nombre_cliente"
                        type="text"
                        id="nombre_cliente"
                        value={formData.nombre}
                        placeholder={
                          formData.nombre_cliente !== ""
                            ? formData.nombre_cliente
                            : "Nombre"
                        }
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
                        id="telefono"
                        value={formData.telefono}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="residencia">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faHouseUser} />
                      <Inputs
                        className="contact-input"
                        placeholder={
                          formData.residencia !== ""
                            ? formData.residencia
                            : "Residencia"
                        }
                        name="residencia"
                        type="text"
                        id="residencia"
                        value={formData.residencia}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleLocalChange}
                    >
                      <option value="">Tipo</option>
                      <option value="Corriente">Corriente</option>
                      <option value="Ejecutivo">Ejecutivo</option>
                    </select>
                  </div>
                  <div className="correo">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Inputs
                        id="correo_electronico"
                        className="contact-input"
                        placeholder={
                          formData.correo_electronico !== ""
                            ? formData.correo_electronico
                            : "Correo Electrónico"
                        }
                        name="correo_electronico"
                        type="email"
                        value={formData.correo_electronico}
                        onChange={handleLocalChange}
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
                    <Inputs
                      id="fecha_entrada"
                      className="fechas-input"
                      name="fecha_entrada"
                      type="date"
                      value={formData.f_entrada}
                      onChange={handleLocalChange}
                    />
                    <Inputs
                      id="fecha_salida"
                      className="fechas-input"
                      name="fecha_salida"
                      type="date"
                      value={formData.f_salida}
                      onChange={handleLocalChange}
                    />
                  </div>
                  <div className="id-reserva">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faHashtag} />
                      <Inputs
                        id="id_reserva"
                        className="reserva-input"
                        placeholder="ID de la reserva"
                        name="id_reserva"
                        type="id"
                        value={formData.id_reserva}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <select
                      name="estado"
                      value={formData.estado}
                      onChange={handleLocalChange}
                    >
                      <option value="">Estado</option>
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="Terminado">Terminado</option>
                    </select>
                  </div>
                  <div className="precio">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        id="precio"
                        className="contact-input"
                        placeholder="Precio"
                        name="precio"
                        type="number"
                        value={formData.precio}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faDoorClosed} />
                      <Inputs
                        id="habitacion"
                        className="contact-input"
                        placeholder="Habitación"
                        name="habitacion"
                        type="text"
                        value={formData.habitacion}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUserTie} />
                      <Inputs
                        id="empleado"
                        className="contact-input"
                        placeholder="Id empleado"
                        name="empleado"
                        type="text"
                        value={formData.empleado}
                        onChange={handleLocalChange}
                      />
                    </div>
                  </div>
                  <div className="descripcion">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faBars} />
                      <Inputs
                        id="descripcion"
                        className="contact-input"
                        placeholder="Descripción"
                        name="descripcion"
                        type="text"
                        value={formData.descripcion}
                        onChange={handleLocalChange}
                      />
                    </div>
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
  const [formData, setFormData] = useState({
    id: "",
    descripcion: "",
    precio: "",
    estado: "",
    f_entrada: "",
    f_salida: "",
    id_habitacion: "",
    id_empleado: "",
  });

  const handleLocalChange = handleChange(setFormData, formData);

  // Variable para almacenar la acción a realizar
  const [action, setAction] = useState(null);

  // Variable para almacenar si se ha buscado la reserva
  const [isSearched, setIsSearched] = useState(false);

  // Variable para almacenar si se ha cambiado algun valor de la reserva
  const [isChanged, setIsChanged] = useState(false);

  // Función para manejar los cambios en los campos de la reserva, se activa cuando se cambia el valor de un campo
  // Al momento de querer realizar una actualización
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
      alert("Por favor, ingrese una identificación.");
    } else {
      // Dependiendo de la acción seleccionada se realiza una petición diferente
      // Si la acción es buscar se realiza una petición GET
      if (action === "Buscar") {
        url = `http://localhost:3000/api/reserva/consultar/${formData.id}`;
        method = "GET";
        // Si la acción es actualizar se realiza una petición PUT
      } else if (action === "Actualizar") {
        // Si no se ha buscado la reserva se muestra un mensaje de alerta

        if (isSearched === false) {
          alert(
            "Por favor, ingrese la ID de la reserva en el campo correspondiente."
          );
          return;
          // Si se ha buscado la reserva se verifica si se ha cambiado algún campo
        } else if (!isChanged) {
          alert(
            "Por favor, cambie al menos un campo antes de actualizar la reserva."
          );
          return;
        }

        url = `http://localhost:3000/api/reserva/actualizar`;
        method = "PUT";
      }

      if (method !== "") {
        fetch(url, {
          method: method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          // Si la acción es actualizar se envía el cuerpo de la petición con los datos de la reserva
          body: method === "PUT" ? JSON.stringify(formData) : null,
        })
          .then(async (response) => {
            if (!response.ok) throw new Error(await response.text());
            if (method === "PUT")
              return alert("Reserva actualizada exitosamente");

            return response.text();
          })
          .then((data) => {
            if (data) {
              data = JSON.parse(data);

              alert("Reserva encontrada.");
              setIsSearched(true);
              // Se actualiza el estado de la reserva con los datos obtenidos
              setFormData({
                id: data.rows[0].ID.toString(),
                descripcion: data.rows[0].DESCRIPCION
                  ? data.rows[0].DESCRIPCION
                  : "",
                precio: data.rows[0].PRECIO.toString(),
                estado: data.rows[0].ESTADO,
                f_entrada: data.rows[0].F_ENTRADA,
                f_salida: data.rows[0].F_SALIDA,
                id_habitacion: data.rows[0].ID_HABITACION.toString(),
                id_empleado: data.rows[0].ID_EMPLEADO.toString(),
              });
            }
          })
          .catch((error) => {
            alert(error.message);
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
                  <h1>Buscar</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Información del cliente</h3>
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
                        id="fecha_entrada"
                        className="fechas-input"
                        label="Fecha de entrada"
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        placeholder={
                          formData.f_entrada !== ""
                            ? formData.f_entrada.toString()
                            : "Fecha de entrada"
                        }
                        name="fecha_entrada"
                        type="text"
                        value={formData.f_entrada}
                        disabled={action !== "Actualizar"}
                        required={false}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        id="fecha_salida"
                        className="fechas-input"
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        placeholder={
                          formData.f_salida !== ""
                            ? formData.f_salida.toString()
                            : "Fecha de salida"
                        }
                        name="fecha_salida"
                        type="text"
                        value={formData.f_salida}
                        disabled={action !== "Actualizar"}
                        required={false}
                      />
                    </div>
                  </div>

                  <div className="tipo">
                    <select
                      name="estado"
                      value={formData.estado}
                      onChange={
                        action === "Actualizar"
                          ? handleLocalUpdateChange
                          : handleLocalChange
                      }
                      disabled={action !== "Actualizar"}
                    >
                      <option value="">Estado</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                  </div>
                  <div className="precio">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        id="precio"
                        className="contact-input"
                        placeholder={
                          formData.precio !== ""
                            ? formData.precio.toString()
                            : "Precio"
                        }
                        name="precio"
                        type="number"
                        value={formData.precio}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="habitacion">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faDoorClosed} />
                      <Inputs
                        id="habitacion"
                        className="contact-input"
                        placeholder={
                          formData.id_habitacion !== ""
                            ? formData.id_habitacion.toString()
                            : "Habitación"
                        }
                        name="habitacion"
                        type="text"
                        value={formData.id_habitacion}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUserTie} />
                      <Inputs
                        id="empleado"
                        className="contact-input"
                        placeholder={
                          formData.id_empleado !== ""
                            ? formData.id_empleado.toString()
                            : "Empleado"
                        }
                        name="id_empleado"
                        type="text"
                        value={formData.id_empleado}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="descripcion">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faBars} />
                      <Inputs
                        id="descripcion"
                        className="contact-input"
                        placeholder={
                          formData.descripcion !== ""
                            ? formData.descripcion.toString()
                            : "Descripción"
                        }
                        name="descripcion"
                        type="text"
                        value={formData.descripcion}
                        disabled={action !== "Actualizar"}
                        onChange={
                          action === "Actualizar"
                            ? handleLocalUpdateChange
                            : handleLocalChange
                        }
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="button-wrap">
                    <ButtonAdmin
                      type="button"
                      value="Crear-reserva"
                      label="Buscar"
                      onClick={() => setAction("Buscar")}
                    />
                    <ButtonAdmin
                      type="button"
                      value="Crear-reserva"
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
