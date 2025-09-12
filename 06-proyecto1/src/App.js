import { Listado } from "./component/Listado";
import { Buscar } from "./component/Buscar";
import { Crear } from "./component/Crear";
import { useState } from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { HeaderNav } from "./layout/HeaderNav";
import { QuizCreator } from "./sections/QuizCreator";
import { Quiz } from "./sections/Quiz";
import { Settings } from "./sections/Settings";


function App() {

  return (
    
    <div className="layout">

      <BrowserRouter > 

     {/*Aqui va la cabecera de la pagina*/}

        <HeaderNav/>

       {/*Aqui va todo el contenido, en este caso las peliculas*/}

       {/*  Routes to create: Games, Quiz Creator, Settings */}
          
          <Routes>
             <Route index element={<QuizCreator />}>
             </Route>
             <Route path="/QuizCreator" element={<QuizCreator/>}/>
              <Route path="/quiz" element={<Quiz/>}/>
              <Route path="settings" element={<Settings/>}/>
          </Routes>

     

             

        {/* Esto es el pie de la pagina*/}

 <footer className="footer">
            &copy; Jasiel Ramirez Suriel / <a href="https://jasielr18.github.io/portfolio2.0/index.html">Clickea para ir a mi portafolio</a> /
        </footer>
    
    </BrowserRouter>

    </div>

    


 

    

  
  );
}

export default App;
