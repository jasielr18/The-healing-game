import React from 'react'
import { Navegation } from '../layout/Navegation';
import { useState, useEffect } from 'react';
import logo from '../images/medicine.png'
import { Listado } from '../component/Listado';
import { Editar } from '../component/Editar';


export const QuizMenu = () => {

    // ------------------------------------------------------------------------

       const [editar, setEditar] = useState(0);
    
       useEffect(
        () => {
    
          conseguirPeliculas();
    
        }, [])
       
    
       
    
        const conseguirPeliculas = () =>{
            
            const pelis = JSON.parse(localStorage.getItem("pelis"));
    
            setListadoState(pelis);
    
            return pelis;
          
        } 
        
    
        const borrarPeli = (id) => {
    
          // Conseguir peticion de peliculas almacenadas.
          let pelis_almacenadas = listadoState;
    
          // filtrar la lista de peliculas, quitando la que seleccionamos para eliminar.
           let nuevo_array_pelis =  pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
          
    
          // Cambiar el estado del listado de peliculas por el nuevo estado sin la pelicula que seleccionamos para borrar.
          setListadoState(nuevo_array_pelis);
    
          // Mostrar la lista de peliculas, sin que salga la que acabamos de borrar
          localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis))
          
    
        }

    // ------------------------------------------------------------------------

    const [listadoState, setListadoState ] = useState([]);
  
    return (
   <>
 


      <div className='layout-quiz'>
      
           <Listado listadoState={listadoState}
                    setListadoState={setListadoState} />

      </div>
    
            {/*Aqui va la barra de navegacion para moverse en la pagina*/}
    
               <Navegation/>

   <aside className="lateral-quiz">
    
        <img  className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
           </aside>

        

        </>
  )
}
