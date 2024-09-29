import { RouterProvider } from "react-router-dom";
import { ProvideAuth } from "@/components/Auth";
import { StrictMode } from "react";
import router from "./router";
import {ProvideNotification} from "@/components/Notification";

const App = () => {
  return (
    <StrictMode>
      <ProvideAuth>
        <ProvideNotification>
          <RouterProvider router={router} />
        </ProvideNotification>
      </ProvideAuth>
    </StrictMode>
  );
};

export default App;