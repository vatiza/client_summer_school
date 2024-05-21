import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContex } from "../../../Provider/AuthProvier";

const Registration = () => {
  const { createAccount, updateUserProfile } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    console.log(import.meta.env.VITE_IMGBB_API_KEY);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((img) => {
        const imgUrl = img.data.display_url;
        const newUserInfo = {
          image: imgUrl,
          name: data.name,
          email: data.email,
          regisCourse: [],
          role: "student",
        };
        console.log(newUserInfo, data);
        createAccount(data.email, data.password)
          .then((result) => {
            console.log(result);
            if (result) {
              updateUserProfile(data.name, imgUrl).then(() => {
                console.log("user created Success");
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Summer Camp| Registraiton</title>
      </Helmet>
      <section className="flex flex-col justify-center items-center h-[100%]">
        <h2 className="text-2xl text-center my-5 font-bold">
          Please Register Here
        </h2>
        <div className="card md:w-1/2 max-w-sm shadow-2xl mx-auto py-10 px-7  rounded-xl">
          <h2 className="card-title font-bold mb-5">Register your Account</h2>
          <form
            className="flex flex-col space-y-8 dark:bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* name bellow */}
            <section className="flex flex-col space-y-2 h-20">
              <label className="font-bold" htmlFor="name">
                Your Name
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="Your Name"
                id="name"
                defaultValue=""
                {...register("name")}
              />
            </section>

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
                <span className="text-red-500">
                  You must provide your email address
                </span>
              )}
            </section>

            <section className="flex flex-col space-y-2   h-24">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                className="input input-bordered"
                type="password"
                placeholder="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})/,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-500">
                  Password must be at least 6 characters long
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-500">
                  Password must have at least one capital letter and one special
                  character
                </span>
              )}
            </section>

            <section className="flex flex-col space-y-2 ">
              <label className="font-bold" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="input input-bordered"
                type="password"
                placeholder="retype password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === getValues("password") ||
                    "The Passwords doesnot match",
                })}
              />
              {errors.confirmPassword?.type === "required" && (
                <span className="text-red-500">
                  Password Confimation is required
                </span>
              )}
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </section>

            <section className="flex flex-col space-y-2 h-28">
              <label className="font-bold" htmlFor="upload">
                Upload Image
              </label>
              <input
                name="image"
                type="file"
                className="file-input w-full max-w-xs text-white"
                id="upload"
                {...register("image", { required: true })}
              />
              {errors.image && <span>Image File is required</span>}
            </section>

            <p>
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Please Login
              </Link>
            </p>

            <input
              className="btn btn-warning"
              type="submit"
              value="Registration"
            />
          </form>

          <div>
            <hr className="border mt-5" />
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
