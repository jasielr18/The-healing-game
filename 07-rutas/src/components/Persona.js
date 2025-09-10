import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre,apellido} = useParams();
    const navegar = useNavigate();

    const enviar = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const url = `/Persona/${nombre}/${apellido}`

        if(nombre.length <= 0 || apellido.length <=0){
            navegar("/inicio");
        }else{
            navegar(url);
        }


        


    }


  return (
    <div>
        {!nombre && <h1>No hay ninguna persona</h1>}
        {nombre && <h1>Esta es la pagina de Persona: {nombre} {apellido}</h1>}
        
        <p>Esta es la pagina de Persona</p>

        <form onSubmit={enviar}>
            <input type='text' name='nombre' placeholder='Escriba el nombre'/>
            <input type='text' name='apellido' placeholder='Escriba el apellido'/>
            <input type='submit' value="enviar" name='enviar'/>
        </form>


    </div>
  )
}
