import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();

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
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-700">
            Book Appointment
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Select Date</label>
              <input
                type="date"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Select Time</label>
              <select className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
                <option>6:00 PM</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
