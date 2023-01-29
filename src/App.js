import React from 'react';
import './App.css';
import freeCodeCampLogo from './assets/fcc_primary.svg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numClics: 0,
    };
    //Contextualizar los metodos es opcional
    this.sumarClics = this.sumarClics.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  
  sumarClics(){
    this.setState(({ numClics }) => ({ numClics: numClics + 1}));
  }

  reiniciarContador(){
    this.setState({ numClics: 0 })
  }

  render(){

    return (
      <div className="App">
        
        <div className='logo--contenedor'>
          <img
            className='logo--freeCodeCamp'
            src={freeCodeCampLogo}
            alt='Logo freeCodeCamp'
          />
        </div>
        
        <div className='contenedor-ppal'>
          
          <Contador numClics={this.state.numClics} />
  
          <Boton 
            texto='Click'
            esBotonDeClic={ true }
            manejarClics={ this.sumarClics }
          />

          <Boton
            texto='Reiniciar'
            esBotonDeClic={ false }
            manejarClics= { this.reiniciarContador }
          />
  
        </div>
      </div>
    );

  }
}

export default App;
