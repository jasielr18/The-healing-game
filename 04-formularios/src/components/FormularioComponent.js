import React, { useState } from 'react'


export const FormularioComponent = () => {

    const [usuario, setUsuarios] = useState({});

    const conseguirDatosDeFormulario = e => {
        e.preventDefault();  

        let datos = e.target;
        let usuarios= {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografia: datos.biografia.value,
            enviar: datos.enviar

        }

        setUsuarios(usuarios)
        
        

    }

    const cambiarDatos = e => {

          let name_del_input = e.target.name;
          let usuario_a_modificar = usuario;


          setUsuarios( estado_previo => ({
              
            ...estado_previo,
            [name_del_input]: e.target.value
                

          }))

    }
 
    return (
    
        <div>
            <h1>Formulario con react</h1>

        
            {usuario.enviar && (

        <div className='label'>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: {usuario.biografia}  
        </div>

    )

    }

            <form onSubmit={conseguirDatosDeFormulario}>
                <input type='text' 
                       placeholder='Nombre' 
                       name='nombre'
                       onChange={cambiarDatos} />

                <input type='text' 
                       placeholder='Apellido' 
                       name='apellido'
                       onChange={cambiarDatos} />
                
                <select name='genero'
                        onChange={cambiarDatos}> 
                    <option>Hombre</option>
                    <option>Mujer</option>
                </select>

                <textarea placeholder='Biografia' 
                          name='biografia'
                          onChange={cambiarDatos}/>

                <input type='submit' value="Enviar" name='enviar'/>
            </form>
        </div>
    )
}
