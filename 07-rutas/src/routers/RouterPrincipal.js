import React from 'react';
import {Routes, Route, NavLink, Link, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';

export const RouterPrincipal = () => {

  return (
   <BrowserRouter>
    <div>
     
    <h1>Cabecera</h1>
    <hr/>
     
    <strong> <h1>Titulo</h1> </strong>
     <hr/>

     <nav>
        <ul>
            <li><NavLink to="/Inicio"
                         className={({isActive}) => isActive ? "activado" : ""}
            >Inicio</NavLink>
            </li>
            <li><NavLink to="/Contacto"
                         className={({isActive}) => isActive ? "activado" : ""}
            >Contacto</NavLink>
            </li>
            <li><NavLink to="/Articulos"
                         className={({isActive}) => isActive ? "activado" : ""}
            >Articulos</NavLink>
            </li> 
        </ul>
     </nav>
     <hr/>
    
    <section>

    
      <Routes>
        <Route path='/Inicio' element={<Inicio/>} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Articulos' element={<Articulos/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>   
    

    </section>
    <hr/>

    <footer><strong>Este es el footer</strong></footer>

    </div>

   </BrowserRouter>

  )

}
