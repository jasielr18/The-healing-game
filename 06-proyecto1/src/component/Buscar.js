import React, { useState } from 'react'

 

export const Buscar = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [encontrado, setEcontrado] = useState();

    const buscarPeli = (e) => {
           
    // Create an state and updated
      
      setBusqueda(e.target.value);
      
      
    // Filter to look for any coincidences
      
      let movieList = listadoState.filter(movie => {

        return movie.titulo.toLowerCase().includes(busqueda.toLowerCase())

      });
      
    
    // Show the full movie list if the amount of letters that the user is typing is 1 or bellow

    if (busqueda.length <= 1 || movieList.length <= 0){
        
       movieList = JSON.parse(localStorage.getItem("pelis"))
        setEcontrado(true);
       
    }else {
      setEcontrado(false)
    }

       
    // Update the state with the main list with everything filtered
    // if(busqueda === movieList.titulo)

   setListadoState(movieList);
  

    }

  return (
    <div className="search">
                <h3>Buscador: {busqueda} </h3>

                {(encontrado == true && busqueda.length > 1) && (
                  <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                )}

                <form>

                   <input type="text"
                         placeholder="Buscar pelicula"
                         autoCorrect='off'
                          value={busqueda}
                          onChange={buscarPeli}
                  />

                    <br/><br/>
                </form>
             </div>
  )
}
