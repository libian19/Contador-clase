import React from "react";
import '../styles/Boton.css'

class Boton extends React.Component {
  render(){

    return(
      <button
        className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={this.props.manejarClics}>
        
        {this.props.texto}
      
      </button>
    )

  }
}

export default Boton
