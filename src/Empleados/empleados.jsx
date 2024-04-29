import React from "react";
import { TextFieldsEmplo } from "./empleadosComponents";
import { ButtonEmplo } from "./empleadosComponents";
import { BasicSelect } from "./empleadosComponents";
import EmpleadoLayout from "./EmpleadoLayout";
import { Link } from "react-router-dom";

export const Container1 = () => {
  return (
    <EmpleadoLayout>
      <div className="form-container" id="1">
        <h1>Formulario de Reserva</h1>
        <h3>Informacion del cliente</h3>
        <form>
          <TextFieldsEmplo 
            label="Nombre" 
            name="name" 
            type="name" />
          <TextFieldsEmplo 
            label="Identificación" 
            name="id" 
            type="id" />
          <TextFieldsEmplo
            label="Correo electrónico"
            name="email"
            type="email"
          />
          <TextFieldsEmplo 
            label="Telefono" 
            name="tel" 
            type="tel" />
        </form> 
         
        </div>
        <h3>Informacion de la reserva</h3>
        <div className="cuerpo-form">
          <TextFieldsEmplo label="Fecha entrada" name="Fecha-in" type="date" />
          <TextFieldsEmplo label="Fecha salida" name="Fecha-out" type="date" />
          <BasicSelect />
          <TextFieldsEmplo label="ID" name="id" type="id" />
        </div>
        <div>
          <ButtonEmplo type="submit" value="Reservar" label="Hacer reserva" />
        </div>
    </EmpleadoLayout>
  );
};

export const Container2 = () => {
  return (
    <EmpleadoLayout>
      <div className="forms" id="2">
        <h1>Busqueda de Reserva</h1>
        <h3>Informacion del cliente</h3>
        <div className="cuerpo-form">
          <TextFieldsEmplo label="Identificación" name="ida" type="id" />
        </div>
        <h3>Informacion de la reserva</h3>
        <div className="cuerpo-form">
          <TextFieldsEmplo label="Fecha entrada" name="Fecha-in" type="date" />
          <TextFieldsEmplo label="Fecha salida" name="Fecha-out" type="date" />
          <BasicSelect />
          <TextFieldsEmplo label="ID" name="id" type="id" />
        </div>
        <div className="botones">
          <ButtonEmplo
            type="submit"
            value="Eliminar-reserva"
            label="Eliminar reserva"
          />
          <ButtonEmplo
            type="submit"
            value="Modificar-reserva"
            label="Modificar reserva"
          />
        </div>
      </div>
    </EmpleadoLayout>
  );
};

export const ContainerEmp = () => {
  return (
    <>
      <body className="cuerpo">
        <div>
          <h1>Bienvenido,</h1>
          <h1>Usuario</h1>
          <h4 className="ques" style={{ paddingTop: "25px" }}>
            ¿Qué quieres hacer hoy?
          </h4>

          <div className="botones">
            <Link className="ToHacerReserva" to="/HacerReserva">
              <ButtonEmplo className="bot" label="Hacer Reserva" />
            </Link>
            <Link className="ToBuscarReserva" to="/BuscarReserva">
              <ButtonEmplo className="bot" label="Buscar Reserva" />
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};

// cons button = document.querySelector('button');
// button.addEventListener('click', function () {
//   const value = button.getAttribute('value');

//   if (value == "Modificar-reserva") {
//       console.log("Modifi");
//   } else {
//       console.log("Elimi");
//   }
// });
