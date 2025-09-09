import React from 'react'
import { useState } from 'react'
import PropTypes, { number } from 'prop-types'

export const CurrentYear = ({year}) => {


    const [año, setAño] = useState(year);

    const nextYear = (e) => {
   
        setAño(año + 1);
        
    }

    const lastYear = (e) => {
   
        setAño(año - 1);
        
    }

    const writeYear = e => {
   
        const dato = parseInt(e.target.value);
        
        if(Number.isInteger(dato)){
            setAño(dato);
        }else{
            setAño(year);
        }
        
        
    }
    
   

    return (
  
        
        
    <div>

        <h1>Año actual</h1>

        <p> <strong>Año actual:</strong> {año}</p>

        <button onClick={nextYear}>Ver proximo año</button>
        <br/>
        <button onClick={lastYear}>Ver año anterior</button>
        <br/>
        <input className='label' placeholder='Cambiar año dinamicamente' onChange={writeYear} />
         <br/>
        <br/>
        <hr/>

  
          


    </div>
  
    )
}

 CurrentYear.propTypes = {

        year: PropTypes.number.isRequired

    }

   
