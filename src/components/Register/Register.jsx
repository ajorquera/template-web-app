import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <div className="App">
            <div className="formContainer">
                <form className='form'>
                    <h2 className='formTitle'>SIGN UP</h2>
                    <div className='formDiv'>
                        <label htmlFor="" className='formLabel'>
                            Name
                            <input type="text" className='formInput'/>
                        </label>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="" className='formLabel'>
                            Email
                            <input type="email" className='formInput'/>
                        </label>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="" className='formLabel'>
                            Password
                            <input type="password" className='formInput'/>
                        </label>
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="" className='formLabel'>
                            Confirm password
                            <input type="password" className='formInput'/>
                        </label>
                    </div>
                    <div className='formBtn formDiv'>
                        <button type="submit" className='formBtnSubmit'>GET STARTED</button>
                    </div>
                    <div className='formDiv forgotPass'>
                        <Link to="/App/ForgotPass" className='formLink'>¿Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}