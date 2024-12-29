import { RouterProvider } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';

import router from "../router";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <React.StrictMode>
      <Authenticator.Provider>
        <RouterProvider router={router} />
      </Authenticator.Provider>
    </React.StrictMode>
  );
};

export default App;