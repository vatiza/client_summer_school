import { BiSolidDollarCircle } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { img, name, _id, instructor_name, price, rating, description } =
    course;
  return (
    <div className="card sm:w-10 lg:w-96 bg-base-100 rounded-xl border m-5 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-warning ">{name}</h2>
        <p className="w-full">{description}</p>

        <p className="flex items-center text-xl">
          <BiSolidDollarCircle className="text-warning" />
          {price}
        </p>

        <p className="flex items-center text-xl">
          <GiTeacher className="text-warning" />
          {instructor_name}
        </p>

        <Link
          to={`/coursesdetails/${_id}`}
          className="btn  btn-warning btn-outline"
        >
          View Details
        </Link>
        <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default CourseCard;
