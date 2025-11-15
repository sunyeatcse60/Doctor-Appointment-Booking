import React from "react";
import { useNavigate } from "react-router";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const navigate = useNavigate();

  const singelDoctor = data.find((doctor) => doctor.id === doctorId);

  const {
    image,
    name,
    workplace,
    fee,
    registrationNumber,
    education,
    speciality,
    availability,
  } = singelDoctor;



  const notify = () => toast(`Appointment schedule for ${name} Successfully`);


  const handleBooking = () => {

    const alreadyBooked = localStorage.getItem("bookedDoctor");
    if (alreadyBooked == id) {
      toast.error("You have already booked this doctor!");
      return; 
    }

    notify();
    localStorage.setItem("bookedDoctor", id);
    setTimeout(() => {
      navigate("/booking");
    }, 2000);
  };




  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden my-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center p-6 border-r">
          <img
            src={image}
            alt={name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-300 shadow-md"
          />

          <h2 className="text-2xl font-bold mt-4">{name}</h2>
          <p className="text-blue-600 font-semibold">{speciality}</p>
          <p className="text-gray-700 mt-1">{education}</p>

          <div className="w-full mt-4 space-y-2 text-center">
            <p>
              <span className="font-semibold">Working at:</span> {workplace}
            </p>

            <div className="border-b border-dashed border-gray-300 my-2"></div>

            <p>
              <span className="font-semibold">Registration No:</span>{" "}
              {registrationNumber}
            </p>

            <div className="border-b border-dashed border-gray-300 my-2"></div>

            <p>
              <span className="font-semibold">Availability:</span>{" "}
              <span className="text-green-600">
                {Array.isArray(availability)
                  ? availability.join(", ")
                  : availability}
              </span>
            </p>

            <p className="mt-2 text-lg">
              <span className="font-semibold">Consultation Fee:</span> {fee} Tk
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6">
          <h3 className="text-2xl font-bold text-center  mb-6 text-blue-700">
            Book an Appointment
          </h3>

          <div className="flex justify-between font-bold mt-10 mb-8">
            <p>Availability: </p>
            <p className="text-green-500">Doctor Available Today</p>
          </div>

          <div className="mt-20">
            <button
              type="submit"
              onClick={handleBooking}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DoctorDetails;
