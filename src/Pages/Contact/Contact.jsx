import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto py-14 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="bg-white shadow-xl rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
       
          <div>
            <label className="font-semibold mb-2 block">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

   
          <div>
            <label className="font-semibold mb-2 block">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

       
          <div>
            <label className="font-semibold mb-2 block">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

       
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
