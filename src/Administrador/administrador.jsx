import React from "react";
import {
  ButtonAdmin,
  TextFieldsAdmin,
  BasicMenu,
  BasicSelect,
  BasicSelectTipo,
} from "./administradorComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminLayout } from "./AdministradorLayout";

export const Admin = () => {
  return (
    <div className="cuerpo">
      <div>
        <h1>Bienvenido,</h1>
        <h3>Usuario</h3>
        <h4 className="ques">¿Qué quieres hacer hoy?</h4>
        <div className="menu">
          <BasicMenu
            name="Reservas"
            option1="Crear Reserva"
            option2="Buscar Reserva"
            link1="/CrearReserva"
            link2="/BuscarReserva"
          />
          <BasicMenu
            name="Empleados"
            option1="Crear Empleados"
            option2="Buscar Empleados"
            link1="/CrearEmpleado"
            link2="/BuscarEmpleado"
          />
          <BasicMenu
            name="Habitaciones"
            option1="Crear Habitación"
            option2="Buscar Habitación"
            link1="/CrearHabitación"
            link2="/BuscarHabitación"
          />
        </div>
      </div>
    </div>
  );
};

export const ContainerCrearReserva = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="1">
          <h1>Formulario de Reserva</h1>
          <h3>Informacion del cliente</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Nombre" name="name" type="name" />
            <TextFieldsAdmin label="Identificación" name="id" type="id" />
            <TextFieldsAdmin
              label="Correo electrónico"
              name="email"
              type="email"
            />
            <TextFieldsAdmin label="Telefono" name="tel" type="number" />
          </div>
          <h3>Informacion de la reserva</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin
              label="Fecha entrada"
              name="Fecha-in"
              type="date"
            />
            <TextFieldsAdmin
              label="Fecha salida"
              name="Fecha-out"
              type="date"
            />
            <BasicSelect />
            <TextFieldsAdmin label="ID" name="id" type="number" />
          </div>
          <div>
            <ButtonAdmin type="submit" value="Reservar" label="Hacer reserva" />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarReserva = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Busqueda de Reserva</h1>
          <h3>Informacion del cliente</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Identificación" name="id" type="number" />
          </div>
          <h3>Informacion de la reserva</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin
              label="Fecha entrada"
              name="Fecha-in"
              type="date"
            />
            <TextFieldsAdmin
              label="Fecha salida"
              name="Fecha-out"
              type="date"
            />
            <BasicSelect />
            <TextFieldsAdmin label="ID" name="id" type="id" />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-reserva"
              label="Eliminar reserva"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-reserva"
              label="Modificar reserva"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerCrearEmpleado = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="1">
          <h1>Formulario de Empleado</h1>
          <h3>Informacion del empleado</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Nombre" name="name" type="name" />
            <TextFieldsAdmin label="Identificación" name="id" type="id" />
            <TextFieldsAdmin
              label="Correo electrónico"
              name="email"
              type="email"
            />
            <TextFieldsAdmin label="Telefono" name="tel" type="number" />
          </div>
          <div className="cuerpo-form">
            <TextFieldsAdmin
              label="Fecha inicio"
              name="Fecha-begin"
              type="date"
            />
            <TextFieldsAdmin
              label="Fecha nacimiento"
              name="Fecha-nacimiento"
              type="date"
            />
            <TextFieldsAdmin label="Salario" name="salario" type="number" />
            <TextFieldsAdmin label="Contraseña" name="id" type="password" />
            <BasicSelectTipo />
          </div>
          <div>
            <ButtonAdmin
              type="submit"
              value="crear-empleado"
              label="Crear Empleado"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarEmpleado = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Busqueda de Empleado</h1>
          <h3>Información del Empleado</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Identificación" name="id" type="number" />
          </div>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Nombre empleado" name="name" type="name" />
            <TextFieldsAdmin label="Correo" name="correo" type="email" />
            <BasicSelectTipo />
            <TextFieldsAdmin label="Contraseña" name="id" type="password" />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-empleado"
              label="Eliminar"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-empleado"
              label="Modificar"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerCrearHabitación = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Formulario de Habitacion</h1>
          <h3>Información de la Habitación</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Tipo Habitación" name="type" type="text" />
            <TextFieldsAdmin label="Id" name="id" type="number" />
            <TextFieldsAdmin label="Capacidad" name="cap" type="number" />
            <TextFieldsAdmin label="Precio" name="price" type="number" />
            <BasicSelect />
          </div>
          <ButtonAdmin
            type="submit"
            value="crear-habitacion"
            label="Crear Habitación"
          />
        </div>
      </AdminLayout>
    </>
  );
};

export const ContainerBuscarHabitación = () => {
  return (
    <>
      <AdminLayout>
        <div className="forms" id="2">
          <h1>Busqueda de Habitación</h1>
          <h3>Información de la habitación</h3>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Identificación" name="id" type="number" />
          </div>
          <div className="cuerpo-form">
            <TextFieldsAdmin label="Tipo" name="type" type="type" />
            <TextFieldsAdmin label="Capacidad" name="cap" type="number" />
            <TextFieldsAdmin label="Precio" name="price" type="number" />
            <BasicSelect />
          </div>
          <div className="botones">
            <ButtonAdmin
              type="submit"
              value="Eliminar-habitacion"
              label="Eliminar"
            />
            <ButtonAdmin
              type="submit"
              value="Modificar-habitacion"
              label="Modificar"
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
