import { useState } from "react";
import { FaVideo, FaPhone, FaMapMarkerAlt, FaMobile } from "react-icons/fa";
import { FaHouseMedical } from "react-icons/fa6";

const TherapyModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const modes = [
    { icon: <FaHouseMedical />, label: "In-person", address: "3rd Floor, A2, 35 Block A2, Delhi", bgColor: "bg-red-200", iconColor: "text-red-500" },
    { icon: <FaVideo />, label: "Video", bgColor: "bg-violet-200", iconColor: "text-violet-500" },
    { icon: <FaMobile />, label: "Call", bgColor: "bg-orange-200", iconColor: "text-orange-500" },
  ];

  const handleSelectMode = (mode: string) => {
    setSelectedMode(mode === selectedMode ? null : mode);
  };

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <FaMapMarkerAlt className="text-purple-500" />
        Please select therapy mode
      </h2>
      <div className="flex flex-wrap gap-6">
        {modes.map((mode, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${mode.bgColor} shadow-md rounded-xl p-4 w-[100px] lg:w-40 cursor-pointer 
              ${selectedMode === mode.label ? "scale-105 shadow-xl ring-2 ring-red-500" : "hover:scale-105"} 
              transition duration-300`}
            onClick={() => handleSelectMode(mode.label)} 
          >
            <div className={`text-2xl lg:text-4xl mb-3 ${mode.iconColor}`}>{mode.icon}</div>
            <span className="text-gray-800 text-[12px] lg:text-lg font-semibold">{mode.label}</span>
            {mode.address && <p className="text-xs text-gray-500 text-center">{mode.address}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyModeSelector;
