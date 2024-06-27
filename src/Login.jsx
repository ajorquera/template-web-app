import react from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="App">
      <div className="formContainer">
        <form>
          <h2 className="tittle">LOGIN</h2>
          <br />
          <div>
            <label htmlFor="email">Email:</label><input type="email" name="email" id="email" className="input" /></div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
            />
          </div>
          <br />
          <div className="below">
            <span>
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="checkbox"
                />
                Remember
              </label>
            </span>
            <span>
              <a href="#">¿Forgot password?</a>
            </span>
          </div>
          <br />
          <div className="btn">
          <button type="submit">SUBMIT</button>
          </div>
          <br />
          <div className="createAccount">
          <a href="#">Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
};
