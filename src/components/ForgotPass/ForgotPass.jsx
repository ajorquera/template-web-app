import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import './ForgotPass.css'

export const ForgotPass = () => {
    //Guardamos en una constante el valor de una expresión regular para luego usarla para validar el campo.
    const MAP_REGEX = {email: /\S+@\S+\.\S+$/,};

    //Usamos un estado para manejar el cambio del texto en el input.
    const [ valueInputEmail, setValueInputEmail ] = useState({email: '',});

    //Usamos un estado para manejar el error en caso de que lo haya.
    const [ errorsEmail, setErrorsEmail ] = useState({email: '',});

    //Creamos una función que maneje el envio de la información.
    const handleSubmit = (e) => {
        e.preventDefault(); //Evitamos que la página se recargue al darle click al submit.
    }
    const handleValidate = (e) => {
        const name = e.target.name;
        const valueField = e.target.value;
        const invalidField = !MAP_REGEX[name].test(valueField);
        const emptyField = !valueField;
        errorsEmail[name] = null;

        if (invalidField) {
            errorsEmail[name] = "El campo es invalido.";
          }
      
        if (emptyField) {
            errorsEmail[name] = "El campo es obligatorio.";
        }

        setErrorsEmail({...errorsEmail});   
    }
        //Creamos una función que maneje el cambio del texto.
        const handleChange = (e) => {
            setValueInputEmail({
                ...valueInputEmail, [e.target.name] : e.target.value
            });
            handleValidate(e); //Ejecutamos la función que valida los datos cada vez que hay un cambio en el input.
        }

    return (
        <div className="App">
            <div className="formContainer">
                <form action="" className="form" noValidate onSubmit={handleSubmit}>
                    <h2 className="formTitle">¿FORGOT PASSWORD?</h2>
                    <div className="formDiv">
                        <p className='formText'>Please enter your email to confirm your identify.</p>
                    </div>
                    <div className='formDiv formDiv--error'>
                        <label htmlFor="" className="formLabel">
                            Email 
                            <input type="email" name="email" id="" className={errorsEmail.email ? 'formInput--error' : 'formInput'} onChange={handleChange} onBlur={handleValidate}/>
                        </label>
                        <p className={errorsEmail.email && 'viewError'}>{errorsEmail.email}</p>
                    </div>
                    <br />
                    <div className="formBtn formDiv ">
                        <button type="submit" className={errorsEmail.email || !valueInputEmail.email ? 'formBtnSubmit--disabled' : 'formBtnSubmit'} disabled={errorsEmail.email || !valueInputEmail.email}>SUBMIT</button>
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