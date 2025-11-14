import React from "react";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router";

const Doctor = ({ singelDoctor }) => {
  const {
    id,
    name,
    availability,
    image,
    education,
    experience,
    registrationNumber,
  } = singelDoctor;

  //   console.log(singelDoctor);

  return (
    <div>
      <div>
        <div className="card bg-base-100 w-full max-w-sm shadow-sm mx-auto">
          <figure>
            <img
              src={image}
              alt="doctor"
              className="w-40 h-40 rounded-full mt-4"
            />
          </figure>

          <div className="card-body">


            <div className="flex gap-10">
              <div className="bg-gray-200 p-2 rounded-xl">
                <p className="text-green-600 font-bold">{availability}</p>
              </div>
              <div className="border p-1 rounded">
                <p className="font-bold">{experience}</p>
              </div>
            </div>


            <h2 className="card-title">{name}</h2>
            <p>{education}</p>
            <p className="border-b border-dashed border-gray-500"></p>
           <div className="flex gap-2 items-center mb-3">
             <CgAdd />
             <p>{registrationNumber}</p>
           </div>
            
            <div className="card-actions justify-end ">
              <Link to={`/details/${id}`}>
                <button className="btn w-full text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl border  border-blue-600">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
