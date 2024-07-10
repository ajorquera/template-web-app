import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const MAP_REGEX = {
  email: /\S+@\S+\.\S+$/,
  password: /^\S{8,16}$/
}

export const Login = (e) => {

  const [ value, setValue ] = useState({email: '',password: '',});

  const [ errors, setErrors ] = useState({ email: '',password: '',});

  const navigate = useNavigate();

  const validate = (e) => {
    let nombre = (e.target.name);
    const value = (e.target.value);
    const isFieldInvalid = !MAP_REGEX[nombre].test(value);
    const isFieldEmpty = !value;
    const isFieldSpace = /\s/.test(value);
    errors[nombre] = null;


    if(isFieldInvalid) {
      errors[nombre] = "El campo es invalido."
    }
 
    if(isFieldEmpty || isFieldSpace) {
      errors[nombre] = "El campo es obligatorio."
    }
 
    setErrors({...errors});

    return Object.keys(errors).length === 0;
  };

  const handleValue = (e) => { setValue({ ...value, [e.target.name]: e.target.value })
  validate(e);
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate('/App/Profile');
    })
    .catch((error) => {
      alert('Error al iniciar sesión: ' + error);
      setValue({ email: '',password: '',});
    });
  }

    
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
                autoComplete="email"
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
                autoComplete="current-password"
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
            <button type="submit" className= {errors.email || errors.password ? "formBtnSubmit--disabled" : "formBtnSubmit"} disabled = {errors.email || errors.password}>
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
