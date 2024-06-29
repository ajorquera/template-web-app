import React from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="App">
      <div className="formContainer ">
        <form className="form">
          <h2 className="formTitle">Login</h2>
          <br />
          <div className="formDiv">
            <label htmlFor="email" className="formLabel">
              Email:
            </label>
            <input type="email" name="email" id="email" className="formInput" />
          </div>
          <br />
          <div className="formDiv">
            <label htmlFor="password" className="formLabel">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="formInput"
            />
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
