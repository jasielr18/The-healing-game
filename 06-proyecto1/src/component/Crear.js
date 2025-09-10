import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {


    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({});
    const [identificarNull, setIdentificarNull] = useState();
    const [movieAdded, setMovieAdded] = useState(null);

    const conseguirDatosForm = e => {
        e.preventDefault();
        const target = e.target;
        const titulo = target.title.value
        const descripcion = target.descripcion.value
        const id = new Date().getTime();
     
        const peli = {
            id,
            titulo,
            descripcion
        };

        // Confirmar que si ambos campos estan llenos, entonces si podemos agregar un nuevo item
        if (titulo.length >=1 && descripcion.length >=1 ){
               
          // Guardar estado
             setPeliState(peli);

         // Actualizar estado con el listado principal
             setListadoState(elemento => {
             return[...elemento, peli]
         });

        // Guardar en el almacenamiento local
             GuardarEnStorage( "pelis", peli);

              e.target.title.value = null;
              e.target.descripcion.value = null;

              setIdentificarNull(false)
          
   
        }else{

          // Validar que si ambos campos estan vacios entonces que no agrege la pelicula.
          setIdentificarNull(true)
          
        }
        
        // if(titulo == null && descripcion == null){


          
                
        // }       
    }


   return (
    <div className="add">
    
    <h3 className="tittle">{tituloComponente}</h3>
    
  {(identificarNull == false) ? 
  <strong ><p> Has añadido la pelicula: {peliState.titulo}</p></strong> 
  :(identificarNull == true) && <strong className='Llenar-campos'><p> Ambos campos deben ser llenos</p></strong>
}
   

  
    

    <form onSubmit={conseguirDatosForm}>

        <input 
        type='text'
         placeholder="Titulo"
         name="title"
         />
        
        <textarea 
        placeholder="Descripcion"
        name='descripcion'
        />
                    
        <input type="submit" value="Guardar"/>
    </form>

    </div>
  )
}
