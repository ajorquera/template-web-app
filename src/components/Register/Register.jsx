import React from 'react';
import {Form} from '../Login/FormComponent';
import { Link } from 'react-router-dom';


/*Este es el componente padres, envia datos y controla el compartiento del componente Form*/

export const Register = () => {
/*Creamos una constante, sera un arreglo formado por los campos que deseamos que esten dentro del formulario*/
const fields = [
  { label: 'Name', name: 'name', type: 'text', value: '' },
  { label: 'Email', name: 'email', type: 'email', value: '' },
  { label: 'Password', name: 'newPassword', type: 'password', value: '' },
  { label: 'Confirm password', name: 'confirmNewPassword', type: 'password', value: '' },
  { label: 'Remember', name: 'remember', type: 'checkbox' },
]

/*Necesitamos manejar el envio del formulario*/
const handleFormSubmit = (contentForm) => {
  console.log('El formulario se ha enviado: ', contentForm);
}

return (
  <div>
    <h1>Register</h1>
    <Form fields={fields} onSubmit={handleFormSubmit}/> {/* Aqui se renderiza lo que viene del componente Form, usando las props de Register*/}
    <Link to="/App/ForgotPass">Forgot password?</Link> {/*Agregamos el Link aparte porque no es un elemento común como para agregarlo dentro del Form*/}
  </div>
);
};