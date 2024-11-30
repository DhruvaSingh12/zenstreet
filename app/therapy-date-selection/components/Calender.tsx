"use client";

import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Example dates (you can dynamically generate this)
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-4">Available Dates</h2>
      <div className="grid grid-cols-7 gap-2 bg-gray-100 p-4 rounded-lg">
        {dates.map((date) => (
          <button
            key={date}
            className={`p-2 rounded-lg ${
              selectedDate === `${date}`
                ? "bg-blue-500 text-white"
                : "bg-white border"
            }`}
            onClick={() => setSelectedDate(`${date}`)}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
