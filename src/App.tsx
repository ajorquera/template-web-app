import React, { useState } from "react";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./pages/Login/Login";

import "./pages/Login/Login.css";
import { auth } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  {usuario ? <Profile correoUsuario={usuario.email} /> : <Login />}

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;