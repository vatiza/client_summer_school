import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes.jsx";
import AuthProvier from "./Provider/AuthProvier.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvier>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvier>
    </HelmetProvider>
  </>
);
