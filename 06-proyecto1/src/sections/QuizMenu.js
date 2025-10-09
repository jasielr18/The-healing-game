import React from 'react'
import { Navegation } from '../layout/Navegation';
import { useState, useEffect } from 'react';
import logo from '../images/medicine.png'
import { Listado } from '../component/Listado';
import { Editar } from '../component/Editar';


export const QuizMenu = () => {

      const [listadoState, setListadoState ] = useState([]);

    // ------------------------------------------------------------------------

       useEffect(
        () => {
    
          conseguirPeliculas();
    
        }, [])
       
    
       
    
        const conseguirPeliculas = () =>{
            
            const pelis = JSON.parse(localStorage.getItem("pelis"));
    
            setListadoState(pelis);
    
            return pelis;
          
        } 
        
    


    // ------------------------------------------------------------------------

    
  
    return (
   <>
 

    
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

           

      <div className='content'>
      
         
                { listadoState != null ? listadoState.map(peli => {
                   return(
                       
                     <article className="quiz-menu-peli-item">
                         <h3 className="title">{peli.titulo}</h3>
                         <p className="Descripcion">{peli.descripcion}</p>

                        
                         <button className="play-button" /* onClick="#" */>Jugar</button>
         
{}
                     </article>
                     );
         
                 }) : <h2>No hay cuestionarios!</h2>}

      </div>

        

        </>
  )
}
