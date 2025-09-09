import React from 'react'
import PropTypes from 'prop-types'



export const TercerComponente = ({nombre, apellido, datos}) => {
 
 
    return (
 
 <div>

  <h1>Comunicacion entre componentes</h1>
   <ul>
    <li><strong>Nombre: </strong> {nombre}</li>
    <li><strong>Apellido: </strong> {apellido}</li>
    <h3><strong>Datos Medicos: </strong></h3>
    <li><strong>Altura: </strong>{datos.altura}</li>
    <li><strong>Grupo sanguineo: </strong> {datos.grupo_sanguineo}</li>
    <li><strong>Edad: </strong> {datos.edad}</li>
   </ul>

 </div>
     


  )

}

TercerComponente.propTypes = {

    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.number,
    datos: PropTypes.object


}
