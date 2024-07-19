import React, { useState } from 'react';

export const Form = ({fields, onSubmit}) => { //fields y onSubmit vienen como prop.
//Inicializamos el estado del formulario de acuerdo a la informaciòn que viene desde Register, guardada en contentForm.
  const [contentForm, setContentForm] = useState( //contentForm viene desde el elemento padre, contiene todos los datos que deben incluirse en Form.
    fields.reduce((fieldAccumulator, field) => { //Recorre cada elemento de fields, es decir cada campo.
      fieldAccumulator[field.name] = field.value || ''; //Con reduce asignamos a cada campo el valor inicial o una cadena vacia.
      return fieldAccumulator; //Retornamos el valor almacenado en el acumulador.
    }, {})//Aqui colocamos el valor inicial de cada campo, en este caso un arreglo vacio.
  );

  //Ahora debemos manejar los cambios que suceden en los campos del formulario.
  const handleChange = (e) => {
    const {name, value} = e.target;
    setContentForm({
      ...contentForm,
      [name]:value,
    });
  };
  //Por último falta manejar el envio de los datos del formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto del navegador para que no se recargue al darle click al boton submit.
    onSubmit(contentForm); //Llama a la función onSubmit pasada como prompt.
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*Con map recorremos todo el arreglo, key sirve para dar un identificador unico a cada elemento del arreglo,asi react sabe exactamente cual fue el elemento que sufrio una modificacion para poder renderizarlo en pantalla, por cada campo que hay en el arreglo se va a renderizar un div con un label y un input en el, las propiedades y los valores son los que vienen desde el componente padre.*/}
      {fields.map((field) => ( 
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            name={field.name}
            type={field.type}
            value={contentForm[field.name]} //El valor de cada campo sera el que este dentro de contentForm donde el nombre del campo coincida con el campo actual.
            onChange={handleChange} 
          />
        </div>
      ))}
      <button type='submit'>Register</button>
    </form>
  );
}
