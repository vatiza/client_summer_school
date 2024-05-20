import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes.jsx";
import "./index.css";
import AuthProvier from "./Provider/AuthProvier.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvier>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvier>
    </HelmetProvider>
  </React.StrictMode>
);
