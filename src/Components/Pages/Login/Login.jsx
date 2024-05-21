import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { VscEyeClosed } from "react-icons/vsc";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { AuthContex } from "../../../Provider/AuthProvier";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginwithemailpass } = useContext(AuthContex);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ defaultValues: { email: undefined, password: undefined } });
  const onSubmit = (data) => {
    console.log(data);

    loginwithemailpass(data.email, data.password)
      .then((result) => {
        const newuser = result.user;
        console.log(newuser);
        toast.success("Login Success");
        navigate("/");  
      })
      .catch((error) => {
        toast.error("Login Faild.");
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Camp | Login</title>
      </Helmet>
      <section className="flex flex-col justify-center items-center h-[100%]">
        <h2 className="text-2xl text-warning text-center my-5 font-bold">
          Please Login Here
        </h2>
        <div className="card md:w-1/2 max-w-sm shadow-2xl mx-auto py-10 px-7  rounded-xl">
          <form
            className="flex flex-col space-y-8 dark:bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* email */}
            <section className="flex flex-col space-y-2 h-20">
              <label className="font-bold" htmlFor="email">
                Your Email
              </label>
              <input
                className="input input-bordered"
                type="email"
                placeholder="email"
                id="email"
                defaultValue=""
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">email address is required</span>
              )}
            </section>

            {/* password */}
            <section className="flex flex-col space-y-2 h-20">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="input input-bordered  rounded-md w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  id="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute right-2 text-2xl mt-3"
                >
                  <VscEyeClosed />
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500">
                  Password required and must be 6 characters
                </span>
              )}
            </section>

            {/* a path to registration  */}
            <p>
              New to this site?{" "}
              <Link to="/registration" className="underline">
                Register Here
              </Link>
            </p>

            {/* disable login button to prevent login  */}
            <input
              disabled={
                !dirtyFields.email ||
                !dirtyFields.password ||
                errors.email ||
                errors.password
                  ? true
                  : false
              }
              className="btn btn-warning"
              type="submit"
              value="Login"
            />
          </form>
          <hr className="border mt-5" />
          <SocialLogin></SocialLogin>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Login;
