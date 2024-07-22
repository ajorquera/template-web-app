import React, {useState} from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const MAP_REGEX = {
    name: /^[A-Za-z\s]+$/,
    email: /\S+@\S+\.\S+$/,
    password: /^\S{8,16}$/,
    confirmpassword: /^\S{8,16}$/,
  };

export const Register = () => {

    //Usamos useState para manejar el valor de los input
    const [ textInput, setTextInput] = useState({ name: '', email: '', password: '', confirmpassword: '' })
    //usamos useState para manejar los errores de los input
    const [ errorsInput, setErrorsInput ] = useState({ name: '', email: '', password: '', confirmpassword: ''  })
    const navigate = useNavigate();

    const handleValidate = (e) => {
        const nameField = e.target.name; //Contiene el nombre del campo.
        const valueField = e.target.value; //Contiene el valor del campo.
        const invalidField = !MAP_REGEX[nameField].test(valueField); //Segun el nombre del campo en que se encuentra, valida si el valor de ese campo coincide con el valor de la expresión regular que tiene el mismo nombre.
        const emptyField = !valueField; //Valida si el campo actual no tiene ningun valor en el.
        const password = textInput.password;
        const confirmPassword = textInput.confirmpassword;
        
        errorsInput[nameField]=null;

        if(invalidField) {
            errorsInput[nameField] = 'Campo invalido.';
        }
        if(emptyField) {
            errorsInput[nameField] = 'El campo es obligatorio.'; 
        }
        // if (password !== confirmPassword) {
        //     errorsInput.confirmpassword = 'Recuerde confirmar su contraseña.'; 
        // }
        setErrorsInput({...errorsInput});
    }

    const handlePassword = (e) => {
        const password = textInput.password;
        const confirmPassword = textInput.confirmpassword;
        errorsInput.confirmpassword=null;

        if (password !== confirmPassword) {
            errorsInput.confirmpassword = 'Las contraseñas no coinciden, verifiquelo por favor.'; 
        }
        setErrorsInput({...errorsInput});
    }

    //Creamos una funcion que actualice el valor del campo cada vez que hay un cambio en el texto que esta dentro del input.
    const handleChange = (e) => {
        setTextInput({
            ...textInput, [e.target.name]:e.target.value //Al contenido anterior de los input, se le agrega a cada input el valor que haya cambiado y que corresponda a su nombre.
        })
        handleValidate(e); //Para que la validación del campo y la muestra del error se ejecute en tiempo real mientras suceden los cambios en el campo.
    }

    //Creamos una funcion que controle el comportamiento de la pagina una vez que se presione el boton del formulario.
    const handleSubmit = (e) => {
        e.preventDefault(); //Evitamos que la pagina se recargue.
        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmpassword.value;

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Usuario se ha registrado con exito');
                const user = userCredential.user;
                navigate('/App/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        }

    return (
        <div className="App">
            <div className="formContainer">
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <h2 className='formTitle'>SIGN UP</h2>
                    <div className='formDiv formDiv--error'>
                        <label htmlFor="name" className='formLabel'>
                            Name
                            <input type="text" name='name' value={textInput.name} className={errorsInput.name ? 'formInput--error' : 'formInput'} onChange={handleChange} onBlur={handleValidate} autoComplete='name' />
                            <p className={errorsInput.name && "viewError"}>{errorsInput.name}</p>
                        </label>
                    </div>
                    <div className='formDiv formDiv--error'>
                        <label htmlFor="email" className='formLabel'>
                            Email
                            <input type="email" name='email' value={textInput.email} className={errorsInput.email ? 'formInput--error' : 'formInput'} onChange={handleChange} onBlur={handleValidate} autoComplete='email' />
                            <p className={errorsInput.email && 'viewError'}>{errorsInput.email}</p>
                        </label>
                    </div>
                    <div className='formDiv formDiv--error'>
                        <label htmlFor="password" className='formLabel'>
                            Password
                            <input type="password" name='password' value={textInput.password} className={errorsInput.password ? 'formInput--error' : 'formInput'} onChange={handleChange} onBlur={handleValidate} autoComplete='password'/>
                        </label>
                        <p className={errorsInput.password && 'viewError'}>{errorsInput.password}</p>
                    </div>
                    <div className='formDiv formDiv--error'>
                        <label htmlFor="confirmpassword" className='formLabel'>
                            Confirm password
                            <input type="password" name='confirmpassword' value={textInput.confirmpassword} className={errorsInput.confirmpassword ? 'formInput--error' : 'formInput'} onChange={handleChange} onBlur={handlePassword} autoComplete='confirmPassword' />
                            <p className={errorsInput.confirmpassword && 'viewError'}>{errorsInput.confirmpassword}</p>
                        </label>
                    </div>
                    <div className='formBtn formDiv'>
                        <button type="submit" className={!textInput.name || !textInput.email || !textInput.password || !textInput.confirmpassword || errorsInput.name || errorsInput.email || errorsInput.password || errorsInput.confirmpassword ? "formBtnSubmit--disabled" : "formBtnSubmit" } disabled={!textInput.name || !textInput.email || !textInput.password || !textInput.confirmpassword || errorsInput.name || errorsInput.email || errorsInput.password || errorsInput.confirmpassword}>GET STARTED</button>
                    </div>
                    <div className='formDiv forgotPass'>
                        <Link to="/App/ForgotPass" className='formLink'>¿Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}