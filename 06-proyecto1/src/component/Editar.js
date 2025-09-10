import React from 'react'
import { useState } from 'react';


export const Editar = ({peli, getPelis, setListadoState, setEditar}) => {

    const [identificarNull, setIdentificarNull] = useState(false);

    const titulo_componente = "Editar pelicula"

    const actualizarPeli = (e, id) => {
        e.preventDefault();
        
        
        // Guardar el target de la pelicula que seleccionamos
        let target = e.target;

           // Esta es la lista original de peliculas que no se va a editar
            let listadoPeliOriginal = getPelis();
           // Esta es la lista original de peliculas que si se va a editar
            let pelis_almacenadas = getPelis();
        
        
        // Create a new object with the information that we submited in the edit form
        let peli_actualizada ={
            id,
            titulo: target.title.value,
            descripcion: target.descripcion.value
        }
       
        // Get the index of the object
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)

        // Update the object with the new values that were given by the user
        pelis_almacenadas[indice] = peli_actualizada;

        if(e.target.title.value.length >= 1 && e.target.descripcion.value.length >= 1){
            console.log("Funciona")
        // Save the updated object to the local storage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

        // Update states
        setListadoState(pelis_almacenadas);
        setEditar(0);

        }else if(e.target.title.value.length <= 0 || e.target.descripcion.value.length <= 0){
            
            console.log("Ta null mi loco")
            setIdentificarNull(true);
            setListadoState(listadoPeliOriginal);   
            
        }
       


       

        
}
  
    return (

    <div className='edit_form'>

        <h3 className='title' >{titulo_componente}</h3>

        {(identificarNull == true) && <strong className='Llenar-campos-editado'><p> Ambos campos deben ser llenos</p></strong>
}

        <form onSubmit={e => actualizarPeli(e, peli.id)}>
            <input 
            className='editar'
                name="title"
                type='text'
                defaultValue={peli.titulo}
            />
            <textarea 
             className='editar'
                name='descripcion'
                defaultValue={peli.descripcion}
            />

            <input type='submit' className='editar' value="Actualizar"/>
        </form>
    
    </div>
  )
}
