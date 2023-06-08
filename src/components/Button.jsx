import React from "react";
import "../styles/Button.css";

function Button(props) {
  //Esta funcion cambia la clase de manera dinamica, dependiendo si es un numero o un operador
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== " . " && valor !== " = "; //retornara true en caso que no sea ninguna de las condiciones
  };

  return (
    // si el boton pulsado es de tipo operacion, agregara un nombre de clase llamado "operacion"
    <div
      className={`boton-numerico ${
        esOperador(props.children) ? "boton-operador" : null}`}
      onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}
export default Button;
