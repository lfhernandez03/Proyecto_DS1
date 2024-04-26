import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function ButtonEmplo(props) {
  return (
    <Button
      type={props.type}
      value={props.value}
      style={{ marginTop: "25px", backgroundColor: "white", color:"black", borderColor:"black"}}
      variant="outlined"
    >
      {props.label}
    </Button>
  );
}

export function TextFieldsEmplo(props) {
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
