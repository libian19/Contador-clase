import { useState } from 'react';
import './App.css';
import freeCodeCampLogo from './assets/fcc_primary.svg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {
  const [numClics, setNumClics]= useState(0)

  const sumarClics = () => {
    setNumClics(numClics + 1)
  };
  const reiniciarContador = () => {
    setNumClics(0)
  }
  
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
        
        <Contador numClics={numClics} />

        <Boton 
          texto='Click'
          esBotonDeClic={ true }
          manejarClics={ sumarClics }
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClics= { reiniciarContador }
        />

      </div>
    </div>
  );
}

export default App;
