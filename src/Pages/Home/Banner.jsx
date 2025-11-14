import React from "react";
import img1 from "../../assets/banner-img-1.png";
import img2 from "../../assets/doctor 2.jpg";

const Banner = () => {
  return (
    <div className="border rounded-xl mt-4 bg-gray-100 py-12">
      
      <div className="text-center w-11/12 md:w-4/6 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Dependable Care, Backend by Trusted
          <span className="block text-blue-600 mt-2">Professionals.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quo suscipit laborum itaque at odio accusamus quaerat, ex voluptates
          soluta illum explicabo, et molestiae. Vitae facilis non placeat
          architecto asperiores alias.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 w-11/12 md:w-4/5 mx-auto">
        
        <img
          src={img1}
          alt=""
          className="rounded-xl shadow-md w-64 h-64 md:w-120 md:h-70 object-cover"
        />

        <img
          src={img2}
          alt=""
          className="rounded-xl shadow-md w-64 h-64 md:w-120 md:h-70 object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
