import React from 'react';
import './ForgotPassConfirm.css';
import { Link } from 'react-router-dom';

export const ForgotPassConfirm = () => {
    return (
        <div className="App">
            <div className="formContainer">
                <form action="" className="form">
                    <h2 className="formTitle">¿FORGOT PASSWORD?</h2>
                    <br />
                    <div className="formDiv">
                        <label htmlFor="" className="formLabel">
                            New password
                            <input type="password" name="" id="" className="formInput" />
                        </label>
                    </div>
                    <br />
                    <div className="formDiv">
                        <label htmlFor="" className="formLabel">
                            Confirm new password
                            <input type="password" name="" id="" className="formInput" />
                        </label>
                    </div>
                    <br />
                    <div className="formBtn formDiv">
                        <button type="submit" className="formBtnSubmit">
                            SAVE
                        </button>
                    </div>
                    <br />
                    <div className="formDiv logIn ">
                        <Link to='/App/'className="formLink">Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}