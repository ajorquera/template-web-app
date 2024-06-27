import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/*const Boton = React.createElement('button', { 'data-id': 123 }, 'Soy un boton')
const Boton2 = React.createElement( 'button', { 'data-id': 456 }, 'No me gusta')
const Boton3 = React.createElement( 'button', { 'data-id': 789}, 'Me encanta')*/

const Boton = ( {id,texto} ) => {
  return (
    <button id={id}> {texto} </button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
   { /*  { Boton } {Boton2 } { Boton3 } */}
   { /* <button data-id= '123'> Me gusta </button>
   <button data-id= '456'> No me gusta </button>
   <button data-id= '789'> Me encanta </button> */ }
   <Boton id= '1' texto='Me gusta'/>
   <Boton id= '2' texto='No me gusta'/>
   <Boton id= '3' texto='Me encanta'/>
   <Boton id= '4' texto='Prueba'/>
  </React.Fragment>
)
