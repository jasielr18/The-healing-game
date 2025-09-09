import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';


export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jasiel");
    const [fechaActual, setFecha] = useState(" 01-12-1998");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {

        setUsuario(e.target.value)
    }

     const cambiarFecha = e => {

        setFecha(Date.now())
    
      }

     
      useEffect( () => {

        setContador(contador+1)
        console.log(`Has modificado el usuario ${contador} veces`)

      },[usuario]);

  

    

    // El useEffect se cargar una sola vez porque puse el '[]' vacio.
    useEffect(() => {

        console.log("Has cargado el componente!");
    },[]);

    // El useEffect se cargar tantas veces se modifique el usuario porque puse el parametro 'usuario' en el '[]'.
      useEffect(() => {

        console.log("Has cambiado el nombre del usuario!");
    },[usuario]);


  return (
    
    <div>

    <h1>El efecto - Hook useEffect</h1>
    <strong className={ contador <= 10 ? 'label' : 'label-green'}>Nombre de usuario: {usuario}</strong>
     <br/>
     <p><strong>fechaActual:</strong>{fechaActual}</p>
    <input  placeholder='Cambiar nombre de usuario' onChange={modUsuario}/>
    <br/>
    <button onClick={cambiarFecha}>Cambiar Fecha</button>

    {/* Esto es lo mismo que: usuario == "Jasiel" ? <PruebasComponent/> 
      Pero lo bueno es que no hay que usar un sino, simplemente la condicion de si pasa */}
    {usuario == "JASIEL" && <AvisoComponent/>}
    
    </div>


  )

  

}
