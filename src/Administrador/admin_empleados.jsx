import React, { useState } from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicSelectTipo, // Suponiendo que este es el componente que falta
} from "./administradorComponents";
import { AdminLayout } from "./AdministradorLayout";
import { useNavigate } from "react-router-dom";
import { Inputs } from "./administradorComponents";
import { SelectBoxEmp } from "./administradorComponents";
import {
  faIdCard,
  faUser,
  faEnvelope,
  faPhone,
  faCalendarDays,
  faSackDollar,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerCrearEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre_empleado: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_inicio: "",
    fecha_nacimiento: "",
    salario: "",
    password: "",
    tipo: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (
      formData.nombre_empleado &&
      formData.id &&
      formData.correo_electronico &&
      formData.telefono &&
      formData.fecha_inicio &&
      formData.fecha_nacimiento &&
      formData.salario &&
      formData.password &&
      formData.tipo
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
                        name="nombre_cliente"
                        type="text"
                        placeholder="Nombre"
                        value={formData.nombre_empleado}
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
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="tipo">
                    <SelectBoxEmp value={formData.tipo} />
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
                        name="fecha_entrada"
                        type="date"
                        value={formData.fecha_inicio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_nacimiento"
                        type="date"
                        value={formData.fecha_nacimiento}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="salario">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Inputs
                        className="contact-input"
                        placeholder="Salario"
                        name="salario"
                        type="number"
                        value={formData.salario}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="contraseña">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faLock} />
                      <Inputs
                        className="contact-input"
                        placeholder="Contraseña"
                        name="password"
                        type="text"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Crear-empleado"
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

export const ContainerBuscarEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre_empleado: "",
    id: "",
    correo_electronico: "",
    telefono: "",
    fecha_inicio: "",
    fecha_nacimiento: "",
    salario: "",
    password: "",
    tipo: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (
      formData.id ||
      formData.nombre_empleado ||
      formData.correo_electronico ||
      formData.password
    ) {
      alert("Formulario válido. Redirigiendo...");
      navigate("/Admin");
    } else {
      alert("Por favor, completa al menos un campo");
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
                <form className="form" onSubmit={handleSubmit}>
                  <div className="titles">
                    <h3>Buscar por identificación</h3>
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
                    <h3>Información del empleado</h3>
                  </div>
                  <div className="input-wrap">
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faUser} />
                      <Inputs
                        className="contact-input"
                        name="nombre_cliente"
                        type="text"
                        placeholder="Nombre"
                        value={formData.nombre_empleado}
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
                  <div className="tipo">
                    <SelectBoxEmp value="tipo" />
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
                        name="fecha_entrada"
                        type="text"
                        value={formData.fecha_inicio}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <Inputs
                        className="fechas-input"
                        name="fecha_salida"
                        type="text"
                        value={formData.fecha_nacimiento}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="salario">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faSackDollar} />
                        <Inputs
                          className="contact-input"
                          placeholder="Salario"
                          name="salario"
                          type="number"
                          value={formData.salario}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="contraseña">
                      <div className="input-icon">
                        <FontAwesomeIcon icon={faLock} />
                        <Inputs
                          className="contact-input"
                          placeholder="Contraseña"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="button-wrap">
                  <ButtonAdmin
                    type="submit"
                    value="Modificar-empleado"
                    label="Modificar"
                  />
                  <ButtonAdmin
                    type="submit"
                    value="Eliminar-empleado"
                    label="Eliminar"
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
