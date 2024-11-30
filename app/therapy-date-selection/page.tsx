"use client";

import Header from "@/components/Header";
import Calendar from "./components/Calender";
import ProceedButton from "./components/ProceedButton";
import SlotSelector from "./components/SlotSelector";
import TherapyModeSelector from "./components/TherapyModeSelector";



export default function TherapyDateSelection() {
  const handleProceed = () => {
    alert("Proceeding to booking...");
  };

  return (
    <div className="p-6 bg-pink-100 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="pt-[100px]">
      <TherapyModeSelector />
      <SlotSelector />
      <Calendar />
      <ProceedButton onClick={handleProceed} />
      </div>
      
    </div>
  );
}
