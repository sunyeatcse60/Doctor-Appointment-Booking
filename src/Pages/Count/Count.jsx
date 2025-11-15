import React from "react";
import img1 from "../../assets/success-doctor.png";
import img2 from "../../assets/success-review.png";
import img3 from "../../assets/success-patients.png";
import img4 from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold">
          We Provide Quality Healthcare
        </h1>
        <p className="text-center mt-7">
          Our commitment is to your well-being. This is reflected in every
          service we offer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 gap-4 my-10 p-10 rounded-2xl">

        <div className="bg-white rounded-xl p-5 flex flex-col ">
          <img className="w-10 h-10" src={img1} alt="" />
          <h2 className="mt-2 text-4xl font-bold">
            <CountUp start={0} end={199} duration={6} />
            +
          </h2>
          <p className="mt-2">Doctors</p>
        </div>

        <div className="bg-white rounded-xl p-5 flex flex-col ">
          <img className="w-10 h-10" src={img2} alt="" />
          <h2 className="mt-2 text-4xl font-bold">
            <CountUp start={0} end={467} duration={6} />
            +
          </h2>
          <p className="mt-2">Reviews</p>
        </div>

        <div className="bg-white rounded-xl p-5 flex flex-col ">
          <img className="w-10 h-10" src={img3} alt="" />
          <h2 className="mt-2 text-4xl font-bold">
            <CountUp start={0} end={1900} duration={6} />
            +
          </h2>
          <p className="mt-2">Patients</p>
        </div>

        <div className="bg-white rounded-xl p-5 flex flex-col ">
          <img className="w-10 h-10" src={img4} alt="" />
          <h2 className="mt-2 text-4xl font-bold">
            <CountUp start={0} end={300} duration={6} />
            +
          </h2>
          <p className="mt-2">Staffs</p>
        </div>

      </div>
    </div>
  );
};

export default Count;
