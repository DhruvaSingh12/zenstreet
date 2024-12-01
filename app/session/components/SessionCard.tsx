"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPeopleGroup, FaUser, FaUserGroup } from "react-icons/fa6";

interface Session {
  title: string;
  type: "Individual" | "Group" | "Couple";
  description: string[];
}

const pricingData = {
  Individual: [
    { duration: "45 min", price: 1200 },
    { duration: "60 min", price: 1800 },
    { duration: "90 min", price: 2500 },
  ],
  Group: [
    { duration: "45 min", price: 800 },
    { duration: "60 min", price: 1200 },
    { duration: "90 min", price: 1600 },
  ],
  Couple: [
    { duration: "45 min", price: 1500 },
    { duration: "60 min", price: 2200 },
    { duration: "90 min", price: 3000 },
  ],
};

const SessionCard = ({ session }: { session: Session }) => {
  const router = useRouter();
  const sessionPrices = pricingData[session.type];
  const [selectedDuration, setSelectedDuration] = useState<string>(
    sessionPrices[0].duration
  );

  const selectedPrice = sessionPrices.find(
    (p) => p.duration === selectedDuration
  )?.price;

  const handleBookNow = () => {
    router.push(`/therapy-date-selection?session=${session.title}`);
  };
  const sessionIcons = {
    Individual: <FaUser className="p-1 bg-black rounded-3xl text-5xl text-blue-500" />,
    Group: <FaPeopleGroup className="p-1 bg-black rounded-3xl text-5xl text-green-500" />,
    Couple: <FaUserGroup className="p-1 bg-black rounded-3xl text-5xl text-pink-500" />,
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-pink-100 border border-gray-300 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition duration-300 max-w-[400px] lg:max-w-[600px] mx-auto">
      <div>
        {sessionIcons[session.type]}
      </div>
      <div className="w-[300px] md:w-[250px] lg:w-[300px] xl:w-[400px] flex justify-center">
      <h2 className="flex flex-row gap-2 text-3xl font-bold text-gray-800 mb-2">{session.title}</h2>
      </div>

      <div className="flex justify-between items-center border-t border-b border-gray-300 py-4 mb-4">
        <span className="text-2xl font-semibold text-gray-800">
          ₹{selectedPrice}
        </span>
        <span className="text-sm text-gray-500">/ {selectedDuration}</span>
      </div>

      <div className="flex justify-around mb-6">
        {sessionPrices.map(({ duration }) => (
          <button
            key={duration}
            className={`px-6 py-2 text-sm font-medium rounded-2xl transition ${
              duration === selectedDuration
                ? "bg-black text-white"
                : "bg-gray-300 hover:bg-gray-400 text-black"
            }`}
            onClick={() => setSelectedDuration(duration)}
          >
            {duration}
          </button>
        ))}
      </div>
      <ul className="space-y-4 mb-6 text-sm text-gray-700">
        {session.description.map((desc, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 text-white font-bold text-lg">
              {index + 1}
            </div>
            <span className="leading-relaxed">{desc}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-row justify-center items-center">
        <button
          className="py-3 font-semibold rounded-full shadow-md px-20 transition duration-300 bg-black hover:bg-white text-white hover:text-black"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SessionCard;
