"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

interface Session {
  title: string;
  price: number;
  duration: string;
  description: string[];
}

const durations = ["45 min", "60 min", "90 min"];

function SessionCard({ session }: { session: Session }) {
  const [selectedDuration, setSelectedDuration] = useState(session.duration);
  const router = useRouter(); // Initialize the router

  const handleBookNow = () => {
    // Navigate to the therapy date selection page with optional query params
    router.push(`/therapy-date-selection?session=${session.title}`);
  };

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 m-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{session.title}</h2>
        <p className="text-xl font-bold text-gray-800">
          ₹{session.price}
          <span className="text-gray-500">/ session</span>
        </p>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {durations.map((duration) => (
          <button
            key={duration}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              duration === selectedDuration
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setSelectedDuration(duration)}
          >
            {duration}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-2">
        {session.description.map((desc, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
            {desc}
          </li>
        ))}
      </ul>

      <button
        className="w-full mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        onClick={handleBookNow} // Add onClick to navigate
      >
        Book Now
      </button>
    </div>
  );
}

export default SessionCard;
