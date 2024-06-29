import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Route,
  Routes,
  Link, BrowserRouter
} from "react-router-dom";
import { Register } from "./components/Register/Register";
import { App } from './App';
import './Index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
<StrictMode>
  <App />
</StrictMode>
);
