"use client";

import React from "react";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter(); 
  const handleBookSession = () => {
    router.push('/profile'); 
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="bg-blue-600 min-h-screen flex items-start justify-center px-4 pb-6 overflow-y-auto pt-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-8 items-center">
            {/* Left */}
            <div className="text-white text-center md:text-left lg:ml-6 lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Automated AI-Enabled Practice Management Solution
              </h1>
              <div className="gap-y-2 text-gray-300">
                <div className="text-base sm:text-lg lg:text-xl">
                  Transform your practice with ZenStreet!
                </div>
                <div className="text-base sm:text-lg lg:text-xl">
                  Automate complex admin workflows, expand your client base,
                  save 75% of your operating expenses, and boost your earnings
                  by <strong className="text-white">6+ lakhs</strong> annually.
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white rounded-[10px] p-6 xl:w-[500px] sm:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Join our waitlist
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Be part of our Beta Program. Our team will reach out within 48
                hours to guide you through onboarding and tailor our platform to
                your needs. Drop your details, and we’ll connect within 2 days.
              </p>
              <form className="space-y-4 text-[14px]">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-500"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-500"
                    placeholder="Last name"
                  />
                </div>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-500"
                  placeholder="Email address"
                />
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md border border-gray-500"
                  placeholder="Phone"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-16 rounded-full hover:bg-white hover:text-black border border-black transition"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 p-6 items-center flex flex-col justify-center">
            <p className="text-gray-100 text-sm sm:text-base mb-4">
              Ready to book a session with one of our therapists? Click the button below to get started.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleBookSession} 
                className="bg-white text-black text-lg py-2 px-16 rounded-full hover:text-white hover:bg-black transition"
              >
                Book a Session
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
