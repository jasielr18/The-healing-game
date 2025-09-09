import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import {TercerComponente} from './TercerComponente';
import EventosComponentes from './EventosComponentes';

function App() {


  const datos_medicos = {

    altura: "1.78cm",
    grupo_sanguineo: 'A+',
    edad: 35

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>React JS course</code> 

        </p>
  
  <EventosComponentes/>

  <TercerComponente
  
       nombre = "Pedro"
       apellido = "Gonzales"
       datos = {datos_medicos}
  
  />
  <SegundoComponente/>
  
  <MiComponente/>
      
          
        
     
      </header>
    </div>
  );
}

export default App;
