import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {Incrementar} from '../src/components/counter';
import { Value } from './components/Text';
import "./Index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
