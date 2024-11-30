import { FaVideo, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const TherapyModeSelector = () => {
  const modes = [
    { icon: <FaMapMarkerAlt />, label: "In-person", address: "3rd Floor, A2, Block A2, Delhi" },
    { icon: <FaVideo />, label: "Video" },
    { icon: <FaPhone />, label: "Call" },
  ];

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Please select therapy mode</h2>
      <div className="flex gap-4 justify-between">
        {modes.map((mode, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer p-4 border rounded-lg hover:shadow-lg">
            <div className="text-2xl text-blue-500">{mode.icon}</div>
            <p className="text-sm font-medium">{mode.label}</p>
            {mode.address && <p className="text-xs text-gray-500 text-center">{mode.address}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyModeSelector;
