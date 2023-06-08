import "../src/styles/App.css";
import Button from "../src/components/Button";
import ScreenCalc from "./components/ScreenCalc";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs"; // para usar evaluate hay que instalarlo por consola -> npm install mathjs

function App() {
  const [input, setInput] = useState(""); //Es estado inicial debe ser un string vacio

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input)); // evaluate evalua la cadena de caracteres de la pantalla de la calc y la transforma en numeros y los opera
    } else {
      alert("Ingresa valores")
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <ScreenCalc input={input}></ScreenCalc>
        <div className="fila">
          <Button manejarClic={agregarInput}> 1 </Button>
          <Button manejarClic={agregarInput}> 2 </Button>
          <Button manejarClic={agregarInput}> 3 </Button>
          <Button manejarClic={agregarInput}> + </Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}> 4 </Button>
          <Button manejarClic={agregarInput}> 5 </Button>
          <Button manejarClic={agregarInput}> 6 </Button>
          <Button manejarClic={agregarInput}> - </Button>
        </div>
        <div className="fila">
          <Button manejarClic={agregarInput}> 7 </Button>
          <Button manejarClic={agregarInput}> 8 </Button>
          <Button manejarClic={agregarInput}> 9 </Button>
          <Button manejarClic={agregarInput}> * </Button>
        </div>
        <div className="fila">
          <Button manejarClic={calcularResultado}> = </Button>
          <Button manejarClic={agregarInput}> 0 </Button>
          <Button manejarClic={agregarInput}> . </Button>
          <Button manejarClic={agregarInput}> / </Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={() => setInput("")}> Clear </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
