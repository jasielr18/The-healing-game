import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

export const Navegation = () => {
  return (


     <nav className="nav">

            <ul>
                <li>
                    <NavLink to="/Quiz">Quiz</NavLink>
                </li>

                <li>
                    <NavLink to="/QuizCreator">Quiz_Creator</NavLink>
                </li>

                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
                
            </ul>

        </nav>
   

  )
}
