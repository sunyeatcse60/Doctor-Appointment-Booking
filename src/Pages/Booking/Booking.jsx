// import React, { useState, useEffect } from 'react';

// const Booking = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [formData, setFormData] = useState({
//         patientName: '',
//         email: '',
//         phone: '',
//         selectedDoctor: '',
//         appointmentDate: '',
//         appointmentTime: '',
//         reason: ''
//     });
//     const [bookings, setBookings] = useState(() => {
//         const savedBookings = localStorage.getItem('appointments');
//         return savedBookings ? JSON.parse(savedBookings) : [];
//     });
//     const [submitted, setSubmitted] = useState(false);

//     // Fetch doctors data
//     useEffect(() => {
//         fetch('/doctorData.json')
//             .then(res => res.json())
//             .then(data => setDoctors(data))
//             .catch(error => console.error('Error fetching doctors:', error));
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validation
//         if (!formData.patientName || !formData.email || !formData.phone || !formData.selectedDoctor || !formData.appointmentDate || !formData.appointmentTime) {
//             alert('Please fill all required fields');
//             return;
//         }

//         const selectedDoctorData = doctors.find(doc => doc.id == formData.selectedDoctor);
        
//         const newBooking = {
//             id: Date.now(),
//             ...formData,
//             doctorName: selectedDoctorData?.name,
//             doctorFee: selectedDoctorData?.fee,
//             bookingDate: new Date().toLocaleDateString()
//         };

//         const updatedBookings = [...bookings, newBooking];
//         setBookings(updatedBookings);
//         localStorage.setItem('appointments', JSON.stringify(updatedBookings));

//         // Reset form
//         setFormData({
//             patientName: '',
//             email: '',
//             phone: '',
//             selectedDoctor: '',
//             appointmentDate: '',
//             appointmentTime: '',
//             reason: ''
//         });

//         setSubmitted(true);
//         setTimeout(() => setSubmitted(false), 3000);
//     };

//     const deleteBooking = (id) => {
//         const updatedBookings = bookings.filter(booking => booking.id !== id);
//         setBookings(updatedBookings);
//         localStorage.setItem('appointments', JSON.stringify(updatedBookings));
//     };

//     // Get minimum date (today)
//     const today = new Date().toISOString().split('T')[0];

//     return (
//         <div className="min-h-screen bg-gray-50 py-8 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Book an Appointment</h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Booking Form */}
//                     <div className="lg:col-span-2">
//                         <div className="bg-white rounded-lg shadow-lg p-8">
//                             {submitted && (
//                                 <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                                     ✅ Appointment booked successfully!
//                                 </div>
//                             )}

//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 {/* Patient Name */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Patient Name *
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="patientName"
//                                         value={formData.patientName}
//                                         onChange={handleInputChange}
//                                         className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         placeholder="Enter your full name"
//                                     />
//                                 </div>

//                                 {/* Email */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Email *
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         placeholder="your@email.com"
//                                     />
//                                 </div>

//                                 {/* Phone */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Phone Number *
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleInputChange}
//                                         className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         placeholder="01X-XXXX-XXXX"
//                                     />
//                                 </div>

//                                 {/* Doctor Selection */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Select Doctor *
//                                     </label>
//                                     <select
//                                         name="selectedDoctor"
//                                         value={formData.selectedDoctor}
//                                         onChange={handleInputChange}
//                                         className="select select-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     >
//                                         <option value="">Choose a doctor...</option>
//                                         {doctors.map(doctor => (
//                                             <option key={doctor.id} value={doctor.id}>
//                                                 {doctor.name} - {doctor.speciality} (Fee: ৳{doctor.fee})
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>

//                                 {/* Appointment Date */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Appointment Date *
//                                     </label>
//                                     <input
//                                         type="date"
//                                         name="appointmentDate"
//                                         value={formData.appointmentDate}
//                                         onChange={handleInputChange}
//                                         min={today}
//                                         className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     />
//                                 </div>

//                                 {/* Appointment Time */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Appointment Time *
//                                     </label>
//                                     <input
//                                         type="time"
//                                         name="appointmentTime"
//                                         value={formData.appointmentTime}
//                                         onChange={handleInputChange}
//                                         className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     />
//                                 </div>

//                                 {/* Reason for Visit */}
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Reason for Visit
//                                     </label>
//                                     <textarea
//                                         name="reason"
//                                         value={formData.reason}
//                                         onChange={handleInputChange}
//                                         className="textarea textarea-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         placeholder="Describe your symptoms or reason for visit..."
//                                         rows="4"
//                                     />
//                                 </div>

//                                 {/* Submit Button */}
//                                 <button
//                                     type="submit"
//                                     className="w-full btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
//                                 >
//                                     Book Appointment
//                                 </button>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Bookings List */}
//                     <div className="lg:col-span-1">
//                         <div className="bg-white rounded-lg shadow-lg p-8">
//                             <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                                 My Appointments ({bookings.length})
//                             </h2>

//                             <div className="space-y-4 max-h-96 overflow-y-auto">
//                                 {bookings.length === 0 ? (
//                                     <p className="text-gray-500 text-center py-8">No appointments booked yet</p>
//                                 ) : (
//                                     bookings.map(booking => (
//                                         <div key={booking.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
//                                             <h3 className="font-semibold text-gray-800">{booking.doctorName}</h3>
//                                             <p className="text-sm text-gray-600 mt-1">
//                                                 📅 {new Date(booking.appointmentDate).toLocaleDateString()}
//                                             </p>
//                                             <p className="text-sm text-gray-600">
//                                                 🕐 {booking.appointmentTime}
//                                             </p>
//                                             <p className="text-sm text-gray-600">
//                                                 👤 {booking.patientName}
//                                             </p>
//                                             <p className="text-sm font-semibold text-blue-600 mt-2">
//                                                 Fee: ৳{booking.doctorFee}
//                                             </p>
//                                             <button
//                                                 onClick={() => deleteBooking(booking.id)}
//                                                 className="btn btn-sm btn-error w-full mt-3 text-white"
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </div>
//                                     ))
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Booking;
import React from 'react';

const Booking = () => {
    return (
        <div>
            thiiiii is booking page
        </div>
    );
};

export default Booking;