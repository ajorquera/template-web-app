import React from 'react';
import appFirebase from "../../FirebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(appFirebase);

export const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            navigate('/App/')
          })
          .catch((error) => {
            console.error("Error signing out: ", error);
          });
      };
    return (
        <div>
            <h1>Validación exitosa, has ingresado correctamente a tu perfil.</h1>
            <button onClick={ handleLogout}>Logout</button>
        </div>
      
    )
}