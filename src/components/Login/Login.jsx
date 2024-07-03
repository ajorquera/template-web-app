import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    console.log(e.target.name);
    setValue({ ...value, [e.target.name]: e.target.value });

  };

  const [errors, setErrors] = useState({});

  const validate = (e) => {
    let errorMessage = {};

    !value.email
      ? (errorMessage.email = "El email es obligatorio")
      : !/\S+@\S+\.\S+/.test(value.email)
      ? (errorMessage.email = "El email es invalido")
      : console.log("Tipo de correo valido");
    !value.password
      ? (errorMessage.password = "La contraseña es obligatoria")
      : console.log("Contraseña ingresada correctamente");
    setErrors(errorMessage);
    return Object.keys(errorMessage).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && alert("Enviado");
  };

  return (
    <div className="App">
      <div className="formContainer ">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h2 className="formTitle">Login</h2>
          <br />
          <div className="formDiv formDiv--error">
            <label htmlFor="email" className="formLabel">
              Email:
              <input
                value={value.email}
                type="email"
                name="email"
                className={errors.email ? "formInput--error" : "formInput"}
                onChange={handleValue}
              />
              <p className={errors.email && "viewError"}>{errors.email}</p>
            </label>
          </div>
          <br />
          <div className="formDiv formDiv--error">
            <label htmlFor="password" className="formLabel">
              Password:
              <input
                value={value.password}
                type="password"
                name="password"
                className={errors.password ? "formInput--error" : "formInput"}
                onChange={handleValue}
              />
              <p className={errors.password && "viewError"}>
                {errors.password}
              </p>
            </label>
          </div>
          <br />
          <div className="below formDiv">
            <span>
              <label htmlFor="remember" className="formLabel">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="formCheckbox"
                />
                Remember
              </label>
            </span>
            <span>
              <Link to="/App/ForgotPass" className="formLink">
                ¿Forgot password?
              </Link>
            </span>
          </div>
          <br />
          <div className="formBtn formDiv">
            <button type="submit" className="formBtnSubmit">
              SUBMIT
            </button>
          </div>
          <br />
          <div className="createAccount formDiv">
            <Link to="/App/Register" className="formLink">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
