import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { Link } from "react-router-dom";

const MAP_REGEX = {
  email: /\S+@\S+\.\S+/,
  password: /.*/
}

export const Login = () => {

  const [ value, setValue ] = useState({email: '',password: '',});

  const [ errors, setErrors ] = useState({ email: '',password: '',});

  const validate = (e) => {
    let nombre = (e.target.name);
    const value = e.target.value;

    
    const isEmailInvalid = !MAP_REGEX[nombre].test(value);
    const isEmailEmpty = !value;
    errors[nombre] = null;

    if(isEmailInvalid) {
      errors[nombre] = "El campo es invalido"
    }

    if(isEmailEmpty) {
      errors[nombre] = "El campo es obligatorio"
    }
    

 
    setErrors({...errors});

    return Object.keys(errors).length === 0;
  };

 
  const handleValue = (e) => { setValue({ ...value, [e.target.name]: e.target.value })
  validate(e);
};

  const handleSubmit = (e) => { e.preventDefault(); validate(e); alert("Enviado") };

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
                onChange={handleValue} onBlur={validate}
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
                onChange={handleValue} onBlur={validate}
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
