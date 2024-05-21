import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const AllCourse = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    axios
      .get("https://server-summer-school.vercel.app/courses")
      .then((data) => setAllCourses(data.data));
  }, []);
  return (
    <div className="sm:grid grid-rows-1 lg:grid grid-cols-3 m-5 ">
      {allCourses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default AllCourse;
