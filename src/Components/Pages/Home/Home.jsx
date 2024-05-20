import AllCourse from "../Card/AllCourse/AllCourse";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="backdrop-invert-0">
        <Slider></Slider>
      </div>
      <h1 className="text-center text-5xl font-bold text-warning my-5">
        Choose Our Course
      </h1>
      <AllCourse></AllCourse>
    </div>
  );
};

export default Home;
