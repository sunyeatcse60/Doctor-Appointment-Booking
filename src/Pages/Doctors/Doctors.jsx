import React, { Suspense, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ data }) => {
    // console.log(data);
    
    const [showall, setShowall] = useState(false);
    const visibleDoctors =  showall ? data : data.slice(0,6);


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

      <div className='bg-gray-50 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-25 mb-15'>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          {
          visibleDoctors.map((singelDoctor) => (<Doctor key={singelDoctor.id} singelDoctor={singelDoctor}></Doctor>))
          }
        </Suspense>
      </div>



       {data.length > 6 && (
        <div className="text-center mt-6 mb-10">
          <button
            onClick={() => setShowall(!showall)}
            className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            {showall ? "Show Less" : "Show More"}
          </button>
        </div>
      )}


    </div>
  );
};

export default Doctors;
