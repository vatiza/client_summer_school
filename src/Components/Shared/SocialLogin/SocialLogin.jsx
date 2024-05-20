import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <section className="flex justify-center">
        <button className="btn btn-circle mr-6 mt-3">
          <FaGoogle className="text-green-500"></FaGoogle>
        </button>
        <button className="btn btn-circle mt-3">
          <FaGithub className="text-warning"></FaGithub>
        </button>
      </section>
    </div>
  );
};

export default SocialLogin;
