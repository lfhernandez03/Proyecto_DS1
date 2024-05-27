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
import { useNavigate } from "react-router-dom";
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
import { ROUTES } from '../rutasConst.js';

export const ContainerCrearReserva = () => {
  const initialState = {
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
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData && Object.values(formData).every((value) => value !== "")) {
      fetch("http://localhost:3000/api/reserva/insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        .then((response) => {
          console.log("part 1", response);

          if (!response.ok) {
            return response.text().then((text) => {
              alert(text);
              throw new Error(text);
            });
          }
          alert("Reserva creada exitosamente");
          navigate(ROUTES.RESERVA_INSERTAR);
          return response.text();
        })
        .then((data) => {
          console.log("part 2", data);
          if (data == "OK") {
            alert("Reserva creada exitosamente");
            navigate(ROUTES.ADMIN);
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

    let url = `http://localhost:3000/api/cliente/consultar/${formData.id}`;

    if (!formData.id || formData.id === "") {
      alert("Por favor ingrese una identificación");
    } else {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.message);
            });
          }
          return response.json();
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                    </div>
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
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faHashtag} />
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
                  </div>
                  <div className="tipo">
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
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
    fecha_entrada: "",
    fecha_salida: "",
    habitacion: "",
    empleado: "",
    habitacion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar los cambios en los campos de la reserva, se activa cuando se cambia el valor de un campo
  // Al momento de querer realizar una actualización
  const handleUpdateChange = (e) => {
    setIsChanged(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Variable para almacenar la acción a realizar
  const [action, setAction] = useState(null);
  // Variable para almacenar si se ha buscado la reserva
  const [isSearched, setIsSearched] = useState(false);
  // Variable para almacenar si se ha cambiado algun valor de la reserva
  const [isChanged, setIsChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let method = "";
    let url = "";
    if (!formData.id || formData.id === "") {
      alert("Por favor ingrese una identificación");
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
          alert("Por favor busque la reserva antes de actualizarla");
          return;
          // Si se ha buscado la reserva se verifica si se ha cambiado algún campo
        } else if (!isChanged) {
          alert("Por favor cambie al menos un campo antes de actualizar la reserva");
          return;
        }

        url = `http://localhost:3000/api/reserva/actualizar`;
        method = "PUT";
      }

      if (method !== "") {
        fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"), // Asegúrate de reemplazar 'token' con tu token de autenticación
          },
          // Si la acción es actualizar se envía el cuerpo de la petición con los datos de la reserva
          body: method === "PUT" ? JSON.stringify(formData) : null,
        })
          .then((response) => {
            if (!response.ok) {
              // Verificar el tipo de contenido de la respuesta
              const contentType = response.headers.get("content-type");
              if (contentType && contentType.indexOf("application/json") !== -1) {
                // Si la respuesta es JSON, analizarla como JSON
                return response.json().then((error) => {
                  throw new Error(error.message);
                });
              } else {
                // Si la respuesta no es JSON, lanzar un error con el texto de la respuesta
                return response.text().then((text) => {
                  throw new Error(text);
                });
              }
            }
            // ...y si la respuesta fue exitosa, devolverla
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.rowCount > 0) {
              alert("Reserva encontrada");
              setIsSearched(true);
              setFormData({
                descripcion: data.rows[0].DESCRIPCION,
                precio: data.rows[0].PRECIO,
                estado: data.rows[0].ESTADO,
                fecha_entrada: data.rows[0].F_ENTRADA,
                fecha_salida: data.rows[0].F_SALIDA,
                id: data.rows[0].ID,
                habitacion: data.rows[0].ID_HABITACION,
                empleado: data.rows[0].ID_EMPLEADO,
              });
              console.log(formData);
            } else {
              alert("Error al buscar la reserva");
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
                        id="fecha_entrada"
                        className="fechas-input"
                        label="Fecha de entrada"
                        placeholder={
                          formData.fecha_entrada !== ""
                            ? formData.fecha_entrada.toString()
                            : "Fecha de entrada"
                        }
                        name="fecha_entrada"
                        type="text"
                        value={formData.fecha_entrada}
                        readOnly={true}
                        required={false}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        id="fecha_salida"
                        className="fechas-input"
                        placeholder={
                          formData.fecha_salida !== ""
                            ? formData.fecha_salida.toString()
                            : "Fecha de salida"
                        }
                        name="fecha_salida"
                        type="text"
                        value={formData.fecha_salida}
                        readOnly={true}
                        required={false}
                      />
                    </div>
                  </div>

                  <div className="tipo">
                    <select
                      name="estado"
                      value={formData.estado}
                      onChange={action === "Actualizar" ? handleUpdateChange : handleChange}
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
                        placeholder={
                          formData.precio !== ""
                            ? formData.precio.toString()
                            : "Precio"
                        }
                        name="precio"
                        type="number"
                        value={formData.precio}
                        readOnly={true}
                        required={false}
                      />
                    </div>
                  </div>
                  <div className="precio">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faDoorClosed} />
                      <Inputs
                        id="habitacion"
                        className="contact-input"
                        placeholder={
                          formData.habitacion !== ""
                            ? formData.habitacion.toString()
                            : "Habitación"
                        }
                        name="habitacion"
                        type="text"
                        value={formData.habitacion}
                        readOnly={true}
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
                          formData.empleado !== ""
                            ? formData.empleado.toString()
                            : "Empleado"
                        }
                        name="empleado"
                        type="text"
                        value={formData.empleado}
                        readOnly={true}
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
                        readOnly={true}
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
