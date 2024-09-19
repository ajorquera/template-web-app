import React, {useState} from 'react';
import './ForgotPassConfirm.css';
import { Link } from 'react-router-dom';

const ForgotPassConfirm = (e) => {

    const MAP_REGEX = {
        password: /^\S{8,16}$/,
        confirmPassword: /^\S{8,16}$/,
    };
    const [value, setValue] = useState({password: '', confirmPassword: '',});
    const [errors, setErrors] = useState({password:'', confirmPassword: '',});

    const handleValidate = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const invalidField = !MAP_REGEX[name].test(value);
        const emptyField = !value;
        errors[name] = null;

        if (invalidField) {
            errors[name] = 'La contraseña debe contener 8 caracteres como mínimo y 16 caracteres como máximo.';
        }
        if (emptyField) {
            errors[name] = "El campo es obligatorio.";
        }

        setErrors({
        ...errors});
    }

    const handleValue = (e) => {
        setValue({
            ...value, [e.target.name]:e.target.value
        });
        handleValidate(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="App">
            <div className="formContainer">
                <form action="" className="form" noValidate onSubmit={handleSubmit}>
                    <h2 className="formTitle">¿FORGOT PASSWORD?</h2>
                    <br />
                    <div className="formDiv formDiv--error">
                        <label htmlFor="" className="formLabel">
                            New password
                            <input type="password" name="password" id="password" className={errors.password ? 'formInput--error' : 'formInput'} onChange={handleValue} onBlur={handleValidate} autoComplete='password' />
                        </label>
                        <p className={errors.password && 'viewError'}>{errors.password}</p>
                    </div>
                    <br />
                    <div className="formDiv formDiv--error">
                        <label htmlFor="" className="formLabel">
                            Confirm new password
                            <input type="password" name="confirmPassword" id="confirmPassword" className={errors.confirmPassword ? 'formInput--error' : 'formInput'} onChange={handleValue} onBlur={handleValidate} autoComplete='confirmPassword'/>
                        </label>
                        <p className={errors.confirmPassword && 'viewError'}>{errors.confirmPassword}</p>
                    </div>
                    <br />
                    <div className="formBtn formDiv">
                        <button type="submit" className={errors.password || errors.confirmPassword || !value.password || !value.confirmPassword ? 'formBtnSubmit--disabled' : 'formBtnSubmit'} disabled={errors.password || errors.confirmPassword || !value.password || !value.confirmPassword}>
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

export default ForgotPassConfirm;