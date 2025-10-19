import React from 'react'
import logo from '../images/medicine.png'
import { Navegation } from '../layout/Navegation'
import { useLocation } from 'react-router-dom'

export const CreateQuiz = () => {

    const location = useLocation();
  // Si vino por NavLink con state:
   const fromState = location.state?.seccionTitulo;
   const stored = JSON.parse(localStorage.getItem("seccionSeleccionada") || "null");
   const seccionSeleccionada = fromState || stored?.titulo || "Sin sección";

    if (!seccionSeleccionada) {
    const stored = JSON.parse(localStorage.getItem("seccionSeleccionada") || "null");
    seccionSeleccionada = stored?.titulo || null;
  }

  const enviarQuiz = (e) => {
  e.preventDefault();

  const form = e.target;
  const id = new Date().getTime();

  // Capturar valores del formulario
  const question = form.question.value;
  const answer1 = form.answer1.value;
  const answer2 = form.answer2.value;
  const answer3 = form.answer3.value;
  const answer4 = form.answer4.value;
  const rightAnswer = form.rightAnswer.value;

  // Construir el objeto de la pregunta
  const nuevaPregunta = {
    id,
    question,
    answers: [
      { text: answer1, correct: rightAnswer === "Respuesta 1" },
      { text: answer2, correct: rightAnswer === "Respuesta 2" },
      { text: answer3, correct: rightAnswer === "Respuesta 3" },
      { text: answer4, correct: rightAnswer === "Respuesta 4" },
    ],
  };

  // Guardar en localStorage dentro de la sección seleccionada
  const data = JSON.parse(localStorage.getItem("preguntasPorSeccion")) || {};
  if (!data[seccionSeleccionada]) data[seccionSeleccionada] = [];
  data[seccionSeleccionada].push(nuevaPregunta);

  localStorage.setItem("preguntasPorSeccion", JSON.stringify(data));

  alert(" Pregunta guardada en la sección " + seccionSeleccionada);

  // Limpiar formulario
  form.reset();
};
  /* ---------------------------------------- */

  return (
     <>

      <div className='layout-quiz'>
      <section className="content-quiz">

      <h1 className='quiz-creator-title1'>Creador de preguntas</h1>

  <h2 className='quiz-creator-title' >Crea la pregunta:</h2>

  <form onSubmit={enviarQuiz}>
    <div>
      <input className='question-creator'
             type='text'
             name='question'
             placeholder='Pregunta'/>
    </div>
          
      <h2 className='quiz-creator-title'>Crea las 4 respuestas: </h2>
     <div>
       <span className='question-number' > 1: </span>  
       <input className='answer-creator' 
              type='text' 
              name='answer1'
              placeholder='Escriba la respuesta'
        />

       <span className='question-number'> 2: </span> 
       <input className='answer-creator' 
              type='text' 
              name='answer2'
              placeholder='Escriba la respuesta'
       />
     </div>

     <div>

        <span className='question-number'> 3: </span> 
        <input className='answer-creator' 
                type='text' 
                name='answer3'
                placeholder='Escriba la respuesta'
        />

        <span className='question-number'> 4: </span> 
        <input className='answer-creator' 
                type='text' 
                name='answer4'
                placeholder='Escriba la respuesta'
        />     
       
     </div>
   
   <section className='right-question-selector'>

     <h2 className='quiz-creator-title'>Cual va a ser la respuesta correcta?</h2>
     <select className='right-answer' name='rightAnswer'>
       <option name="answer1">Respuesta 1</option>
       <option name="answer2">Respuesta 2</option>
       <option name="answer3">Respuesta 3</option>
       <option name="answer4">Respuesta 4</option>
     </select>

     <input type='submit' value="Guardar pregunta"/>

   </section>

  </form>   


        </section>
      </div>
    
            {/*Aqui va la barra de navegacion para moverse en la pagina*/}
    
               <Navegation/>

  <aside className="lateral-quiz">
    <img  className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
        <img className="gamepic" src={logo} alt='Logo'/>
  </aside>
     
    </>

  )
}
