import React, { useState } from 'react';

export const Formulario = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
  });

  const validate = (name, value) => {
    let error = '';
    switch (name) {
      case 'nombre':
        if (!value) {
          error = 'El nombre es requerido';
        } else if (value.length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres';
        }
        break;
      case 'email':
        if (!value) {
          error = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'El email no es válido';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    const error = validate(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      newErrors[key] = validate(key, formValues[key]);
    });
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === '');
    if (isValid) {
      // Enviar formulario
      console.log('Formulario enviado', formValues);
    } else {
      console.log('Errores en el formulario', newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
        </label>
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
