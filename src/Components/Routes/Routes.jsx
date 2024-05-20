import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Instructors from "../Pages/Home/Instuctors/Instructors";
import CourseDetails from "../Pages/Card/AllCourse/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration> </Registration> },
      { path: "/coursesdetails/:id", element: <CourseDetails></CourseDetails> },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
]);
export default router;
