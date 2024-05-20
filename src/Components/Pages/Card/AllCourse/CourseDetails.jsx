import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const {
    course_content,
    name,
    rating,
    img,
    price,
    description,
    instructor_name,
    requirements,

    total_seats,
  } = details;
  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`).then((data) => {
      setDetails(data.data);
    });
  }, [id]);
  return (
    <div className="">
      <h1 className="text-center text-warning text-5xl font-bold my-4">
        Course Details
      </h1>
      <div className="hero min-h-screen my-5 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} />
          <div className="sm:text-sm">
            <h1 className="sm:text-sm lg:text-5xl text-warning font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <p className="text-xl">Requirements: {requirements}</p>
            <p className="text-xl">Course content:</p>
            <ol style={{ listStyleType: "lower-latin" }} className="ms-20">
              {course_content?.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ol>
            <p className="text-xl text-violet-400 font-bold">
              Instructor Name: {instructor_name}
            </p>
            <p className="text-xl font-bold text-warning">
              Course Price: ${price}
            </p>
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            <p className="textxl font-bold"> Total Seats: {total_seats}</p>
            {/* todo availabe seat count  */}
            <p>Availabe Seats: </p>

            <button className="btn btn-warning text-right">Enroll Now</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl text-warning :">Reviews</h1>
      </div>
    </div>
  );
};

export default CourseDetails;
