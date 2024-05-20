import { Rating } from "@smastrom/react-rating";
import { FaMailBulk } from "react-icons/fa";

const AllInstructor = ({ instuctor }) => {
  const { email, img, instructor_name, expertise_languages } = instuctor;
  return (
    <div>
      <div className="card sm:w-10 lg:w-96 bg-base-100 rounded-xl border m-5 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-warning ">{instructor_name}</h2>
          <p className="flex items-center text-warning gap-3">
            <FaMailBulk></FaMailBulk>
            {email}
          </p>
          <p className="text-warning">Expertise:</p>
          <ul className="ms-7">
            {expertise_languages.map((itm, index) => (
              <li key={index}>{itm}</li>
            ))}
          </ul>

          <button className="btn  btn-warning btn-outline">Send Mail</button>
          <Rating style={{ maxWidth: 130 }} value={3} readOnly />
        </div>
      </div>
    </div>
  );
};

export default AllInstructor;
