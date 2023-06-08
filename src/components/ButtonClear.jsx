import React from "react";
import "../styles/ButtonClear.css";

const ButtonClear = (props) => {
  return (
    <div
      className="boton-clear"
      onClick={() => props.manejarClear(props.children)}>
      {props.children}
    </div>
  );
};

export default ButtonClear;
