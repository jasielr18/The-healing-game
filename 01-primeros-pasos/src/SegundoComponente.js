import React from 'react'

 const SegundoComponente = () => {
  
    let libros = ["Habitos Atomicos","Harry Potter","The Shinning"]


return (
 <div>

      <h1>Libros en inventario:</h1>
       { libros.length >= 1 ? (
        <ul>
         {
          libros.map( (libro, indice) => {

            return <li key ={indice}>{libro}</li>

            })
         }

        </ul>



       )
      
      :(<p>No hay Libros</p>)
      }

 </div>
  )
}

export default SegundoComponente;
