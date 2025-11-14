import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ data }) => {
    // console.log(data);
  return (
    <div>
      <div className="mt-25 text-center">
        <h1 className="text-4xl font-bold">Our Best Doctors</h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          necessitatibus cupiditate fugiat voluptatibus maxime exercitationem
          totam eaque? At, dolorem eos!
        </p>
      </div>

      <div className='bg-gray-50 p-0 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-25 mb-15'>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          {
          data.map((singelDoctor) => (<Doctor key={singelDoctor.id} singelDoctor={singelDoctor}></Doctor>))
          }
        </Suspense>
      </div>

    </div>
  );
};

export default Doctors;
