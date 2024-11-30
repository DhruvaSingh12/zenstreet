"use client";

import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, eachDayOfInterval, isBefore, isToday, isSameDay } from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date(); 
  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(startOfMonthDate);
  const endOfWeekDate = endOfWeek(endOfMonthDate);
  const calendarDays = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  });
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const isDateDisabled = (date: Date) => isBefore(date, today) && !isToday(date);
  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="shadow-xl bg-white rounded-3xl p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <button onClick={goToPreviousMonth} className="text-xl font-semibold text-gray-500 hover:text-gray-700">
            &lt;
          </button>
          <span className="text-2xl font-bold text-gray-700">{format(currentDate, "MMMM yyyy")}</span>
          <button onClick={goToNextMonth} className="text-xl font-semibold text-gray-500 hover:text-gray-700">
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4 mb-6 text-center">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="text-sm font-semibold text-gray-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-4 text-center">
          {calendarDays.map((date) => {
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();
            const isSelected = selectedDate && isSameDay(selectedDate, date);
            const isTodayDate = isToday(date);
            const isDisabled = isDateDisabled(date);
            return (
              <button
                key={date.toString()}
                onClick={() => handleDateSelect(date)}
                disabled={isDisabled}
                className={`p-2 lg:p-3 rounded-lg text-lg font-semibold transition-all ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : isTodayDate
                    ? "bg-blue-200 text-blue-800 font-bold"
                    : isCurrentMonth
                    ? "text-gray-700 hover:bg-blue-100"
                    : "text-gray-400"
                } ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
        {selectedDate && (
          <div className="mt-4 text-center text-lg text-blue-600">
            <p>Selected Date: <span className="font-semibold">{format(selectedDate, "MMMM dd, yyyy")}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
