import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem"; // Corregir la importación de MenuItem
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{ color: "#0F4571" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to={props.link1} onClick={handleClose}>
          {props.option1}
        </MenuItem>
        <MenuItem component={Link} to={props.link2} onClick={handleClose}>
          {props.option2}
        </MenuItem>
      </Menu>
    </div>
  );
}

export function ButtonAdmin(props) {
  return (
    <Button
      type="submit"
      value={props.value}
      onClick={props.onClick}
      style={{
        marginTop: "25px",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
      }}
      variant="outlined"
    >
      {props.label}
    </Button>
  );
}

export function TextFieldsAdmin(props) {
  return (
    <TextField
      id={props.id}
      type={props.type}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      variant="outlined"
      style={{
        marginBottom: "1rem",
      }}
      autoComplete="off"
      required
    />
  );
}

export const Inputs = (props) => {
  return (
    <div>
      <label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          name={props.name}
          readOnly={props.readOnly}
          onChange={props.onChange}
          autoComplete="off"
          required={props.required}
          style={{
            textAlign: "center"
          }}
        />
      </label>
    </div>
  );
};

export const SelectBoxReserva = (props) => {
  const options = [
    { value: "Pendiente", label: "Pendiente" },
    { value: "Terminado", label: "Terminado" },
  ];
  
  return (
    <div className="option">
      <Select
        name={props.name}
        defaultValue={{ label: "Tipo", value: "empty" }}
        options={options}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export const SelectBoxReservaCliente = (props) => {
  const options = [
    { value: "Corriente", label: "Corriente" },
    { value: "Ejecutivo", label: "Ejecutivo" },
  ];

  return (
    <div className="option">
      <Select
        name={props.name}
        defaultValue={{ label: "Tipo", value: "empty" }}
        options={options}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export const SelectBoxEmp = (props) => {
  const options = [
    { value: "Administrador", label: "Administrador" },
    { value: "Corriente", label: "Corriente" },
  ];

  const handleChange = ({ value }) => {
    console.log(value);
  };

  return (
    <div className="option">
      <Select
        defaultValue={{ label: "Tipo", value: "empty" }}
        options={options}
        onChange={props.onChange}
      />
    </div>
  );
};

export function BasicSelect(props) {
  const [estado, setEstado] = React.useState("");

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Estado</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={estado}
        label="Estado"
        onChange={props.onChange}
      >
        <MenuItem value={1}>Activo</MenuItem>
        <MenuItem value={0}>Inactivo</MenuItem>
      </Select>
    </FormControl>
  );
}

export function BasicSelectTipo(props) {
  const [estado, setEstado] = React.useState("");

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={estado}
          label="Estado"
          onChange={props.onChange}
        >
          <MenuItem value={1}>Corriente</MenuItem>
          <MenuItem value={0}>Administrador</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
