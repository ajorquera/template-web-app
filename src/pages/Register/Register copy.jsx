import React from 'react';
import {Form} from '../Login/FormComponent';
import { Link } from 'react-router-dom';
import './Register.css';

/*Este es el componente padres, envia datos y controla el compartiento del componente Form*/

export const Register = () => {
/*Creamos una constante, sera un arreglo formado por los campos que deseamos que esten dentro del formulario*/
const fields = [
  { label: 'Name', name: 'name', type: 'text', value: '',},
  { label: 'Email', name: 'email', type: 'email', value: '' },
  { label: 'Password', name: 'newPassword', type: 'password', value: '' },
  { label: 'Confirm password', name: 'confirmNewPassword', type: 'password', value: '' },
  { label: 'Remember', name: 'remember', type: 'checkbox', },
]

/*Necesitamos manejar el envio del formulario*/
const handleFormSubmit = (contentForm) => {
  console.log('El formulario se ha enviado: ', contentForm);
}

return (
  <div className="App">
  <div className='formContainer'>
    <h1 className='formTitle'>Register</h1>
    <Form className='form' fields={fields} onSubmit={handleFormSubmit}/> {/* Aqui se renderiza lo que viene del componente Form, usando las props de Register*/}
    <Link to="/App/ForgotPass" className='formLink'>Forgot password?</Link> {/*Agregamos el Link aparte porque no es un elemento común como para agregarlo dentro del Form*/}
  </div>
  </div>
);
};