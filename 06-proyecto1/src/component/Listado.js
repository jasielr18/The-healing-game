import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';



export const Listado = ({listadoState, setListadoState}) => {

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

   
  
  return (
    
    <>
       
       { listadoState != null ? listadoState.map(peli => {
          return(
              
            <article className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="Descripcion">{peli.descripcion}</p>

                <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                {/* Aqui vamos a mostrar el formulario para editar */}
                {editar === peli.id && 
                 <Editar 
                     peli={peli}
                     getPelis={conseguirPeliculas}
                     setListadoState={setListadoState}
                     setEditar={setEditar}
                 /> }

            </article>
            );

        }) : <h2>No hay peliculas!</h2>}

    </>

      )}

    
      
    
    
    
  

