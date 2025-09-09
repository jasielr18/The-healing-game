// Para hacer un componente primero tenemos que importar los modulos.
import React from "react";


// Luego hacemos la funcion que va a tener nuestro componente.

const MiComponente = () =>{
 
    let usuario = {

    nombre: "Jasiel",
    apellido: "Ramirez",
    web: "jasielramirezportfolio.com"

    };
   

return (

    

    <div >
<br/>
<hr/>
<h2>Mi componente</h2>
<h3>Datos del usuario</h3>
<ul>

<li>
 Nombre: <strong>{usuario.nombre}</strong>
</li>

<li>
    
    Apellido: <strong>{usuario.apellido}</strong>
</li>

<li>
    Web: <strong>{usuario.web}</strong>
</li>


</ul>
<br/>
<hr></hr>
<br/>
<ul>
    <li>React</li>
    <li>Javascript</li>
    <li>HTML & CSS</li>
</ul>

</div>

);



};

export default MiComponente;