import { Listado } from "./component/Listado";
import { Buscar } from "./component/Buscar";
import { Crear } from "./component/Crear";
import { useState } from "react";

import imagen from './images/movie.png';

function App() {

  const [listadoState, setListadoState ] = useState([]);


  return (
    
    <div className="layout">

    {/*Aqui va la cabecera de la pagina*/}

        <header className="header">

            <h1><img className="app-icon" src={imagen} /> Pelis Free</h1>

        </header>

       {/*Aqui va todo el contenido, en este caso las peliculas*/}

        <section className="content">
            
          {/*Aqui van las peliculas*/}
           <Listado listadoState={listadoState}
                    setListadoState={setListadoState} />

        </section>

        {/*Aqui va la barra de navegacion para moverse en la pagina*/}

        <nav className="nav">

            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>

        </nav>

        

        

        <aside className="lateral">

       {/* Esta va a ser la barra de busqueda */}
             <Buscar 
                   listadoState={listadoState}
                  setListadoState={setListadoState}
             />

       {/* Esto es para poder añadir nuevas peliculas en nuestra aplicacion*/}
             <Crear setListadoState={setListadoState}/>
             
    
        </aside>

        {/* Esto es el pie de la pagina*/}

 <footer className="footer">
            &copy; Jasiel Ramirez Suriel / <a href="https://jasielr18.github.io/portfolio2.0/index.html">Clickea para ir a mi portafolio</a> /
        </footer>

    </div>
  );
}

export default App;
