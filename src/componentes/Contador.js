import React from "react";
import '../styles/Contador.css'

function Contador( {numClics }) {
  return(
    <div className="contador">
      { numClics }
    </div>
  );
}
export default Contador;