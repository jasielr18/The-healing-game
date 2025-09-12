import React from 'react'
import { Listado } from '../component/Listado';
import { Buscar } from '../component/Buscar';
import { Crear } from '../component/Crear';
import { Navegation } from '../layout/Navegation';
import { useState } from 'react';



export const QuizCreator = () => {
  
    const [listadoState, setListadoState ] = useState([]);
  
    return (

    <>
  <section className="content">
            
          {/*Aqui van las peliculas*/}
           <Listado listadoState={listadoState}
                    setListadoState={setListadoState} />

        </section>

        {/*Aqui va la barra de navegacion para moverse en la pagina*/}

           <Navegation/>

        <aside className="lateral">

       {/* Esta va a ser la barra de busqueda */}
             <Buscar 
                   listadoState={listadoState}
                   setListadoState={setListadoState}
             />

       {/* Esto es para poder añadir nuevas peliculas en nuestra aplicacion*/}
             <Crear setListadoState={setListadoState}/>
             
    
        </aside>
    </>
   
  )
}
