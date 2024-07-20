import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPass.css'

export const ForgotPass = () => {
    return (
        <div className="App">
            <div className="formContainer">
                <form action="" className="form">
                    <h2 className="formTitle">¿FORGOT PASSWORD?</h2>
                    <div className="formDiv">
                        <p className='formText'>Please enter your email to confirm your identify.</p>
                    </div>
                    <div className="formDiv">
                        <label htmlFor="" className="formLabel">
                            Email 
                            <input type="email" name="" id="" className="formInput" />
                        </label>
                    </div>
                    <br />
                    <div className="formBtn formDiv ">
                        <button type="submit" className='formBtnSubmit'>SUBMIT</button>
                    </div>
                    <br />
                    <div className="formDiv logIn">
                        <Link to='/App/'className='formLink'>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}