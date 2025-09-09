import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './componentes/MiPrimerEstado';
import { CurrentYear } from './componentes/CurrentYear';

function App() {
  
  const date = new Date().getFullYear();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>El estado en react - Hook useState</h1>
           
           <CurrentYear year={date}/>

           <MiPrimerEstado/>

      </header>
    </div>
  );
}

export default App;
