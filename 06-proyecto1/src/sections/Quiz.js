import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navegation } from "../layout/Navegation";
import logo from "../images/medicine.png";
import gameImage1 from "../images/medicina.jpeg"
import gameImage2 from "../images/medicina2.webp"
import gameImage3 from "../images/medicina3.webp"
import gameImage4 from "../images/medicina4.jpg"
import gameImage5 from "../images/medicina5.jpg"
import gameImage6 from "../images/medicina6.jpg"
import gameImage7 from "../images/medicina7.jpg"
import correctAudio from "../audios/correctAnswer.mp3"
import incorrectAudio from "../audios/incorrectAnswer.mp3"

export const Quiz = () => {
  const location = useLocation();
  const seccion = location.state?.seccionTitulo || "Sin sección";

  const imagesForTheGame = [gameImage1,gameImage2,gameImage3,gameImage4,gameImage5, gameImage6, gameImage7];

  // Estados
  const [imageState, setImageState] = useState(imagesForTheGame[0]);
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarBotonNext, setMostrarBotonNext] = useState(false);

  // Cargar preguntas
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("preguntasPorSeccion")) || {};
    const preguntasDeEstaSeccion = data[seccion] || [];
    setPreguntas(preguntasDeEstaSeccion);
  }, [seccion]);

  const manejarRespuesta = (answer) => {
    setRespuestaSeleccionada(answer);
    setMostrarBotonNext(true);

    const correctSound = new Audio(correctAudio);
    const incorrectSound = new Audio(incorrectAudio);

    if (answer.correct) {
      setPuntaje((prev) => prev + 1);
      correctSound.play();
    }else{
       incorrectSound.play();
    }
  };

  const siguientePregunta = () => {
    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1);
      setRespuestaSeleccionada(null);
      setMostrarBotonNext(false);
      

    } else {
      setMostrarResultado(true);
    }
  };

  // Si no hay preguntas
  if (preguntas.length === 0) {
    return (

    <>
     <div className="content">
      <div className="layout-quiz">
        <section>
          <h2 className="no-questions"> No hay preguntas para la sección: {seccion}</h2>
        </section>
        
      </div>
     </div>
      <Navegation />
      <aside className="lateral-quiz">
        {Array.from({ length: 60 }).map((_, i) => (
          <img key={i} className="gamepic" src={logo} alt="Logo" />
        ))}
      </aside>

    </>

    );
  }

  // Si ya terminó
  if (mostrarResultado) {
    return (
      <>
        <div className="content">
          <div className="layout-quiz">
            <section className="content-quiz">
              <h2>Resultados de {seccion}</h2>
              <p className="total-score">
                Tu puntaje: {puntaje} de {preguntas.length}
              </p>
              <button
                className="play-again-button"
                onClick={() => window.location.reload()}
              >
                Volver a jugar
              </button>
            </section>
          </div>
        </div>

        <Navegation />
        <aside className="lateral-quiz">
          {Array.from({ length: 50 }).map((_, i) => (
            <img key={i} className="gamepic" src={logo} alt="Logo" />
          ))}
        </aside>
      </>
    );
  }

  const preguntaActual = preguntas[indice];

  return (
    <>
      <div className="layout-quiz">
        <section className="content-quiz">
          <div id="quizGame">
            <h2 id="question" className="questionQuizGame1">
              {preguntaActual.question}
            </h2>

            <div>
              <img className="gameImage" src={imageState}/>
            </div>

            <div className="answerBtn">
              {preguntaActual.answers.map((ans, i) => {
                let claseExtra = "";
                if (respuestaSeleccionada) {
                  if (ans === respuestaSeleccionada) {
                    claseExtra = ans.correct ? "correct" : "incorrect";
                    
                  } else if (ans.correct) {
                    claseExtra = "correct";

                  }
                }

                return (
                  <button
                    key={i}
                    className={`btn ${claseExtra}`}
                    onClick={() =>
                      !respuestaSeleccionada && manejarRespuesta(ans)
                    }
                    disabled={!!respuestaSeleccionada}
                  >
                    {ans.text}
                  </button>
                );
              })}
            </div>

            {/* 👇 Botón NEXT aparece después de responder */}
            {mostrarBotonNext && (
              <button className="next-button" onClick={siguientePregunta}>
                Next &gt;&gt;
              </button>
            )}

            <p className="quiz-progress">
              Pregunta {indice + 1} / {preguntas.length}
            </p>
          </div>
        </section>
      </div>

      <Navegation />

      <aside className="lateral-quiz">
        {Array.from({ length: 60 }).map((_, i) => (
          <img key={i} className="gamepic" src={logo} alt="Logo" />
        ))}
      </aside>
    </>
  );
};
