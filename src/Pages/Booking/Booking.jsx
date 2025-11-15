import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Booking = () => {
  const data = useLoaderData();

  const [appointment, setAppointment] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("bookedDoctor")) || [];
    return stored;
  });

  const handleBookingCancel = (id) => {
    const update = appointment.filter((item) => item.id !== id);
    setAppointment(update);
    localStorage.setItem("bookedDoctor", JSON.stringify(update));
  };
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {appointment.length === 0 && (
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold text-gray-700">
            No Appointments Found
          </h1>

          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
              Go To Home
            </button>
          </Link>
        </div>
      )}

      <div className="space-y-5">
        <div className="mb-8 bg-amber-200 p-4 rounded-2xl">
          <h1 className="font-bold text-3xl text-center">
            My Today Appointments
          </h1>
        </div>

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg p-5 rounded-xl flex gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-gray-600">
                <strong>Speciality:</strong> {item.speciality}
              </p>
              <p className="text-gray-600">
                <strong>Education:</strong> {item.education}
              </p>
              <p className="font-semibold mt-1">Fee: {item.fee}</p>

              <button
                onClick={() => handleBookingCancel(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-red-600"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
