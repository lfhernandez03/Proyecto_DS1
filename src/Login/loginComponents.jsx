import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";

export function ButtonLogin(props) {
  return (
    <Button
      type={props.type}
      value={props.value}
      style={{ marginTop: "25px" }} 
      variant="outlined">
        {props.title}
    </Button>
  );
}

export function TextFields(props) {
  return (
    <TextField
      id={props.id}
      type={props.type}
      label={props.label}
      name={props.name}
      variant="standard"
      style={{ paddingBottom: "15px"}}
      required
    />
  );
}

