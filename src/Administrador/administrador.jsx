import React from "react";
import { ButtonAdmin, ButtonLink, BasicMenu } from "./administradorComponents";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminLayout } from "./AdministradorLayout";

export const Admin = () => {
    return (
        <div className="cuerpo">
            <div>
                <h1>Bienvenido,</h1>
                <h3>Usuario</h3>
                <h4 className="ques">¿Qué quieres hacer hoy?</h4>
                <div className="menu">
                    <BasicMenu name="Reservas" option1="Crear Reserva" option2="Buscar Reserva" link1="/CrearReserva" link2="/BuscarReserva" />
                    <BasicMenu name="Empleados" option1="Crear Empleados" option2="Buscar Empleados" link1="/CrearEmpleado" link2="/BuscarEmpleado" />
                    <BasicMenu name="Habitaciones" option1="Crear Habitación" option2="Buscar Habitación" link1="/CrearHabitación" link2="/BuscarHabitación" />
                </div>
            </div>
        </div>
    );
};

export const ContainerCrearReserva = () => {
    return (
    <>
    <AdminLayout>
        <h1>Formulario de Reserva</h1>
    </AdminLayout>
    </>
    );
};

export const ContainerBuscarReserva = () => {
    return (
    <>
    <AdminLayout>
        <h1>Busqueda de Reserva</h1>
    </AdminLayout>
    </>
    );
}

export const ContainerCrearEmpleado = () => {
    return (
    <>
    <AdminLayout>
        <h1>Formulario de Empleado</h1>
    </AdminLayout>
    </>
    );
};

export const ContainerBuscarEmpleado = () => {
    return (
    <>
    <AdminLayout>
        <h1>Busqueda de Empleado</h1>
    </AdminLayout>
    </>
    );
}

export const ContainerCrearHabitación = () => {
    return (
    <>
    <AdminLayout>
        <h1>Formulario de Habitación</h1>
    </AdminLayout>
    </>
    );
};

export const ContainerBuscarHabitación = () => {
    return (
    <>
    <AdminLayout>
        <h1>Busqueda de Habitación</h1>
    </AdminLayout>
    </>
    );
}