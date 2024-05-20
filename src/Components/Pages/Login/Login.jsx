import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginErr, setLoginErr] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ defaultValues: { email: undefined, password: undefined } });
  const onSubmit = (data) => {
    console.log(data);
    setLoginErr("");
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
        {loginErr && <p className="text-red-500 my-10">{loginErr}</p>}
      </section>
</>
  );
};

export default Login;
