import React from "react";
import '../styles/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClics }){
  return(
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClics}>
      
      {texto}
    
    </button>
  )
}
export default Boton
