import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
      "id": 1,
      "email": "pedro@gmail.com",
      "first_name": "Pedro",
      "last_name": "Gonzales",
      "avatar": "Pedrito05"
    },
    {
      "id": 2,
      "email": "raul89@gmail.com",
      "first_name": "Raul",
      "last_name": "Montana",
      "avatar": "Ramon_69"
    },
    {
      "id": 3,
      "email": "victor8903@hotmail.com",
      "first_name": "Victor",
      "last_name": "Robles",
      "avatar": "VictorR82"
    }

        ]);
    };

   const getUsuariosDesdeApi = () => {

    fetch("https://reqres.in/api/users?page=1&api_key=reqres-free-v1")
    .then(response => response.json())
    .then(respuesta_final => {
        setUsuarios(respuesta_final.data);

    },
    error => {
        console.log(error);
    }

);

   }

   
    const getsUsuarioAW = () => {
setInterval(async() => {
        try{
        
        const peticion = await fetch("https://reqres.in/api/users?page=1&api_key=reqres-free-v1");
        const {data} = await peticion.json(); 
        setUsuarios(data);
        setCargando(false);
  
        }catch(error){

            setError("Error al cargar: "+error.message);
            
        };
     }, 2000);

    }

    useEffect( () => {
        getsUsuarioAW();
    }, []);

    if(error !== ""){

        return ( 
        <div>
        {error}
        </div>);

        

    } else if(cargando === true){

          return (

    <div>
        Cargando componente...
    </div>

  );

    }else if(cargando === false && error === ""){
 return (

    <div>
        <hr/>
        <h3>Peticion Ajax</h3>
        <ol>
            {usuarios.map(usuarios => {
               return <li>
                <img src={usuarios.avatar} width='30' img/>
                {usuarios.first_name} {usuarios.last_name} </li>
            })}
        </ol>

    </div>
  )

    }

   



 
}
    