import React from "react";
import "../styles/ScreenCalc.css"

//Otra forma de crear el componente (es comun cuando el componente es muy simple)
const ScreenCalc = ({input}) => (
    <div className="screenCalc">
        {input}
    </div>
)
export default ScreenCalc;