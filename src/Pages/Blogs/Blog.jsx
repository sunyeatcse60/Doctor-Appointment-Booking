import React, { useEffect, useState } from "react";

const Blog = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/medicalData.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Medical FAQ – Most Common Questions Answered
      </h1>

      <div className="space-y-6">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg p-6 rounded-xl border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              {item.question}
            </h2>
            <p className="text-gray-600 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
