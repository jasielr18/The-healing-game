import React from 'react';
import {Routes, Route, NavLink, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Gestion } from '../components/panel/Gestion';
import { Crear } from '../components/panel/Crear';
import { AcercaDe } from '../components/panel/AcercaDe';




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
            <li><NavLink to="/Persona"
                         className={({isActive}) => isActive ? "activado" : ""}
            >Persona </NavLink>
            </li> 
            <li><NavLink to="/Panel"
                         className={({isActive}) => isActive ? "activado" : ""}
            >Panel de control </NavLink>
            </li> 
        </ul>
     </nav>
     <hr/>
    
    <section>

    
      <Routes>
        <Route path='/Inicio/' element={<Inicio/>} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Articulos' element={<Articulos/>} />
        <Route path='/Persona' element={<Persona/>} />
        <Route path='/Persona/:nombre' element={<Persona/>} />
        <Route path='/Persona/:nombre/:apellido' element={<Persona/>} />
        <Route path='/Redirigir' element={<Navigate to="/Persona/"/>} />
        <Route path="/Panel/*" element={<PanelControl/>}>
             <Route index element={<InicioPanel/>}/>
             <Route path='inicio' element={<InicioPanel/>}/>
             <Route path='crear-articulos' element={<Gestion/>}/>
             <Route path='gestion-usuarios' element={<Crear/>}/>
             <Route path='acerca-de' element={<AcercaDe/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>   
    

    </section>
    <hr/>

    <footer><strong>Este es el footer</strong></footer>

    </div>

   </BrowserRouter>

  )

}
