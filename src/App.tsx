import { RouterProvider } from "react-router-dom";
import router from "./router";
import React from "react";
import { ProvideAuth } from "@/components/Auth";

const App = () => {
  return (
    <React.StrictMode>
      <ProvideAuth>
        <RouterProvider router={router} />
      </ProvideAuth>
    </React.StrictMode>
  );
};

export default App;