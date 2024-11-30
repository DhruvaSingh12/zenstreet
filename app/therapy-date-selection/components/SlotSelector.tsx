"use client";

import React, { useState } from "react";

const SlotSelector = () => {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const slots = {
    morning: ["8:00 - 8:45 AM", "9:00 - 9:45 AM", "11:00 - 11:45 AM"],
    afternoon: ["12:00 - 12:45 PM", "2:00 - 2:45 PM"],
    evening: ["5:00 - 5:45 PM", "7:00 - 7:45 PM", "8:00 - 8:45 PM"],
  };

  const toggleSlot = (slot: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-4">Select Slots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(slots).map(([time, slotTimes]) => (
          <div key={time}>
            <h3 className="font-semibold text-gray-600 capitalize">{time}</h3>
            {slotTimes.map((slot, index) => (
              <button
                key={index}
                className={`w-full p-2 mt-2 border rounded-lg ${
                  selectedSlots.includes(slot)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => toggleSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        * Please select one or more slots to see availability.
      </p>
    </div>
  );
};

export default SlotSelector;
