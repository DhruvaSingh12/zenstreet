import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    { text: "The guidance I received helped me manage my stress and feel more balanced in life.", author: "Anonymous" },
    { text: "Therapy helped me build self-esteem and confidence that I never thought possible.", author: "Anonymous" },
    { text: "I found clarity and peace through the sessions. It was life-changing.", author: "Anonymous" },
    { text: "The compassionate approach made me feel understood and supported.", author: "Anonymous" },
    { text: "The tools and techniques I learned here have greatly improved my relationships.", author: "Anonymous" },
    { text: "I feel like I can finally move forward with a positive outlook on life.", author: "Anonymous" },
    { text: "The sessions were tailored to my needs, and the results were remarkable.", author: "Anonymous" },
    { text: "The guidance provided was practical, insightful, and extremely helpful.", author: "Anonymous" },
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 shadow-xl rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaQuoteLeft className="text-pink-500" /> Client Testimonials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 text-base italic mb-3">
              “{testimonial.text}”
            </p>
            <p className="text-gray-500 text-sm font-medium text-right">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 text-black hover:underline font-medium"
      >
        {showAll ? "Show Less ↑" : "Show More ↓"}
      </button>
    </div>
  );
};

export default Testimonials;
