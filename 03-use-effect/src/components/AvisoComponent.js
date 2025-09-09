import React, { useEffect } from 'react'



export const AvisoComponent = () => {
  
    useEffect(() => {

        // Cuando el componente se monta
        alert("Has montado el componente!!!");

        // Cuando el componente se desmonte
        return () => {

        alert("Has desmontado el componente!!!");
    }

    },[])

    
  
    return (
        
    <div>
        <hr/>
        <h3>Hola Jasiel, Como te encuentras?</h3>
        <br/>
        <button onClick={() => {
            alert("Bienvenido!!!")
        }}>Mandar alerta</button>

    </div>
  )
}

