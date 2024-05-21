import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContex } from "../../../Provider/AuthProvier";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { loginwithGoole } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const hangleGoogleLogin = () => {
    console.log("btncli");
    loginwithGoole()
      .then((result) => {
        toast.success("Successfully Login!");
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login Faild.");
        console.log(error.massage);
      });
  };
  return (
    <div>
      <section className="flex justify-center">
        <button
          onClick={hangleGoogleLogin}
          className="btn btn-circle mr-6 mt-3"
        >
          <FaGoogle className="text-green-500"></FaGoogle>
        </button>
        <button className="btn btn-circle mt-3">
          <FaGithub className="text-warning"></FaGithub>
        </button>
      </section>
      <Toaster />
    </div>
  );
};

export default SocialLogin;
