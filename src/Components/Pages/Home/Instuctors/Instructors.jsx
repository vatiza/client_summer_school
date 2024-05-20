import axios from "axios";
import { useEffect, useState } from "react";
import AllInstructor from "../../Card/AllInstructor/AllInstructor";

const Instructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/instructor")
      .then((data) => setAllInstructors(data.data));
  }, []);
  return (
    <div className="sm:grid grid-rows-1 lg:grid grid-cols-3">
      {allInstructors.map((instuctor) => (
        <AllInstructor
          key={instuctor._id}
          instuctor={instuctor}
        ></AllInstructor>
      ))}
    </div>
  );
};

export default Instructors;
