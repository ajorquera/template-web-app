import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { ForgotPass } from "./components/ForgotPass/ForgotPass";
import { Register } from "./components/Register/Register";
import '../src/components/Login/Login.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/App/' element={<Login />} />
        <Route path='/App/Register' element={<Register />} />
        <Route path='/App/ForgotPass' element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  );
};
