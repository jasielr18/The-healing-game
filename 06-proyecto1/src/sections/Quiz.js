import React from 'react'
import { Listado } from '../component/Listado';
import { Buscar } from '../component/Buscar';
import { Crear } from '../component/Crear';
import { Navegation } from '../layout/Navegation';
import { useState } from 'react';
import logo from '../images/medicine.png'

export const Quiz = () => {

    

  const nextText = "Next >>"

    
  return (
     <>
 


      <div className='layout-quiz'>
        <section className="content-quiz">
                
                <div id="quizGame">

          <h2 id="question" className="questionQuizGame1"> ¿Cuál es la rama de la biología que estudia el funcionamiento interno de las células, incluyendo procesos como el transporte de sustancias, la comunicación celular y la producción de energía?</h2>

          

      <div className="answerBtn">

                <button className="btn" >Anatomía humana</button>
                <button className="btn" >Genética molecular</button>
    
        
                <button className="btn" >Fisiología celular</button>
                <button className="btn" >Microbiología</button>
        
                

      </div>
          
      <button id="next-btn" className="nextBtn">{nextText}</button>



 </div>


            </section>
      </div>
    
            {/*Aqui va la barra de navegacion para moverse en la pagina*/}
    
               <Navegation/>

   <aside className="lateral-quiz">
           

      
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
