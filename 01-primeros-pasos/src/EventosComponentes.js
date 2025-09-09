import React from 'react'





const EventosComponentes = () => {

    const buttonPressed = (e) => {

        alert("Button Pressed");

    }

    const hasDadoDobleClick = (e) => {

        alert("You pressed the button twice");

    }

    const hasEntrado = (e,accion) => {

        console.log(`Has ${accion} de la caja.`);
    }
   
    const entrasteAlInput = () => {

        console.log("Has entrado al input, mete tu nombre!!")

    }

    const salisteDelInput = () => {

        console.log("Estas fuera del input, CHAO!!")

    }


    


return (

 <div>
  <h1>Eventos en react</h1>
    
   {/*Evento click*/}
  <button onClick={buttonPressed} > <strong>Click on me</strong> </button>

  <br/>
  <br/>

   {/*Evento doble click*/}
  <button onDoubleClick={hasDadoDobleClick} ><strong>Double click me</strong></button>
  
  <br/>
  <br/>

   {/*Evento al entrar y salir el mouse*/}
   <div id='caja'
        onMouseEnter={e => hasEntrado(e, "entrado")}
        onMouseLeave={e => hasEntrado(e, "salido")}
   
   > <strong>Pasa por encima!!</strong></div>


 

  {/*Evento foucs y blur*/}
  <p>
    <input onFocus={entrasteAlInput}
           onBlur={salisteDelInput}
           placeholder='Ingrese texto aqui'
           />
  </p>


   <hr/>
 </div>
   )    
}

export default EventosComponentes