import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem"; // Corregir la importación de MenuItem
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
      type={props.type}
      value={props.value}
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
      variant="standard"
      style={{ paddingBottom: "15px" }}
      required
    />
  );
}

export function BasicSelect() {
  const [estado, setEstado] = React.useState("");

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={estado}
          label="Estado"
          onChange={handleChange}
        >
          <MenuItem value={1}>Activo</MenuItem>
          <MenuItem value={0}>Inactivo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function BasicSelectTipo() {
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
            onChange={handleChange}
          >
            <MenuItem value={1}>Corriente</MenuItem>
            <MenuItem value={0}>Administrador</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }