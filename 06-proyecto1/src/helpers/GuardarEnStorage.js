export const GuardarEnStorage = (clave, elementoIngresado )=> {
   
      // Conseguir los elementos que ya tenemos en Localstorage
      let elementos = JSON.parse(localStorage.getItem(clave));

     

      // Comprobar si es un array
      if(Array.isArray(elementos)){
        // Añadir dentro del array un elemento nuevo
          elementos.push(elementoIngresado)
      }else{
       // Crear un array con la nueva peli
          elementos = [elementoIngresado]
      }
      
     // Añadir dentro del array un elemento nuevo
       localStorage.setItem(clave, JSON.stringify(elementos))



      // Devolver objeto guardado
      return elementoIngresado;

    }