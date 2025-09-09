import React from 'react'
import { useState } from 'react';



export const MiPrimerEstado = () => {
  

    const [nombre, setName] = useState("Jasiel")
   
    const cambiarNombre = (e, nombreFijo) => {
          setName(nombreFijo);
    }

  
    return (
    
    <div>
   
    <h2>MiPrimerEstado</h2>

    <p><strong>Nombre:</strong> {nombre}</p>
    <button onClick={e => cambiarNombre(e, "Pedro")} onDoubleClick={e => cambiarNombre(e, "Jasiel")}><strong>Cambiar</strong></button>

    <br/> 

    <input placeholder='Cambiar texto' onKeyDown={ e => cambiarNombre(e, e.target.value) } />
    </div>
     


  )
}
