"use client";

import { useState } from "react";
import {
  FaVideo,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaIdCard,
  FaBrain,
  FaUsers,
  FaBriefcase,
  FaCalendarCheck,
  FaMobile,
  FaHeart,
  FaMapMarkerAlt,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Header from "../../components/Header";
import { FaHouseMedical, FaLocationDot } from "react-icons/fa6";
import Testimonials from "./components/Testimonials";
import ShareModal from "./components/ShareModal";
import { useRouter } from "next/navigation";
const TherapistProfile = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/session");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      

      <main className="px-2 lg:px-16 pt-[100px]">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left */}
          <aside className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg lg:rounded-none w-full lg:w-1/3 lg:fixed p-10 lg:p-16 lg:top-20 lg:left-0 lg:h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col p-8 bg-white rounded-[12px] items-center text-center">
              <div className="relative w-full h-full">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src="/profile.png"
                    alt="Therapist Image"
                    width={170}
                    height={190}
                    className="rounded-[16px] shadow-md"
                  />
                </div>
                <div className="absolute top-0 right-0 lg:right-4">
                  <ShareModal pageLink={"https://www.yoursite.com"} />
                </div>
              </div>
              <h2 className="text-2xl items-center flex flex-row font-bold mt-4 text-black">
                Swetha Varma
                <div className="relative group">
                  <FaCheckCircle className="text-pink-500 ml-2" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-10 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Verified
                  </span>
                </div>
              </h2>

              <p className="text-gray-600 text-[14px] lg:text-lg mt-2">
                Consultant Clinical Psychologist
              </p>
              <p className="text-black text-[16px] mt-2">
                10+ Years of Experience
              </p>
              <p className="text-black text-sm mt-2">
                Starts at <strong className="text-lg">₹1,200</strong>/Session
              </p>
              <p className="flex flex-row items-center gap-2 mt-2">
                <FaLocationDot size={20} />
                Block A2, Delhi
              </p>
            </div>
            <div
              className="flex flex-row justify-center gap-x-2 items-center p-6 cursor-pointer"
              onClick={handleNavigation}
            >
              <button className="bg-white flex flex-row hover:bg-black text-black text-[14px] lg:text-lg font-bold hover:text-white py-3 px-10 rounded-full shadow-lg gap-x-2">
                <FaCalendarAlt className="text-xl lg:text-3xl animate-pulse-slow" />{" "}
                <p className="lg:pt-[2.5px]">Book Session</p>
              </button>
            </div>
          </aside>

          {/* Right */}
          <section className="w-full lg:w-2/3 lg:ml-[33.333%] flex gap-6 flex-col">
            {/* About Me */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <div className="text-gray-700">
                Hello, I&apos;m Swetha, a licensed therapist dedicated to guiding
                individuals through life&apos;s challenges with empathy and
                expertise. With over 4 years of experience, I specialize in
                helping clients manage anxiety, depression, and relationship
                issues through personalized, evidence-based practices.
                {showMore && (
                  <span>
                    {" "}
                    <p className="pt-1">
                      My commitment to continuous learning keeps me updated with
                      the latest therapeutic techniques, allowing me to provide
                      the best possible care. Whether you seek stress management
                      strategies or personal growth, I am here to empower you on
                      your journey towards emotional well-being.
                    </p>
                  </span>
                )}
              </div>
              <button
                onClick={handleToggle}
                className="text-black hover:underline font-medium flex items-center mt-2"
              >
                {showMore ? "Show less" : "Read more"}{" "}
                {showMore ? (
                  <MdOutlineKeyboardArrowUp className="ml-1" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="ml-1" />
                )}
              </button>
            </div>

            {/* Credentials */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Credentials</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaGraduationCap size={24} className="text-blue-500" />
                  <span className="font-semibold">
                    Ph.D. in Clinical Psychology - Harvard University
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUniversity size={24} className="text-green-500" />
                  <span className="font-semibold">
                    M.A. in Counseling - University of California, Berkeley
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaIdCard size={24} className="text-purple-500" />
                  <span className="font-semibold">
                    Licensed Professional Counselor (LPC) - State of DEF
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBrain size={24} className="text-yellow-500" />
                  <span className="font-semibold">
                    Certified Cognitive Behavioral Therapist (CBT)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers size={24} className="text-red-500" />
                  <span className="font-semibold">
                    Member, American Psychological Association (APA)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase size={24} className="text-teal-500" />
                  <span className="font-semibold">
                    10+ years of experience in individual and group therapy
                  </span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaCalendarCheck className="text-purple-500" />
                Available On
              </h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center bg-red-200 shadow-md rounded-xl p-4 w-[100px] lg:w-40 hover:scale-105 transition duration-300">
                  <FaHouseMedical className="text-red-500 text-2xl lg:text-4xl mb-3" />
                  <span className="text-gray-800 text-[12px] lg:text-lg font-semibold">
                    In-person
                  </span>
                </div>
                <div className="flex flex-col items-center bg-violet-200 shadow-md rounded-xl p-4 w-[100px] lg:w-40 hover:scale-105 transition duration-300">
                  <FaVideo className="text-violet-500 text-2xl lg:text-4xl mb-3" />
                  <span className="text-gray-800 text-[12px] lg:text-lg font-semibold">
                    Video Call
                  </span>
                </div>
                <div className="flex flex-col items-center bg-orange-200 shadow-md rounded-xl p-4 w-[100px] lg:w-40 hover:scale-105 transition duration-300">
                  <FaMobile className="text-orange-500 text-2xl lg:text-4xl mb-3" />
                  <span className="text-gray-800 text-[12px] lg:text-lg font-semibold">
                    Voice Call
                  </span>
                </div>
              </div>
            </div>

            {/* Therapy */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaHeart className="text-pink-500 pr-[2px]" /> I Offer Therapy
                For
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "Stress Management",
                  "Relationship Skills",
                  "Anxiety Reduction",
                  "Depression Relief",
                  "Behavioral Issues",
                  "Trauma Healing",
                ].map((therapy) => (
                  <span
                    key={therapy}
                    className="bg-white text-black px-6 py-3 border hover:bg-gray-100 rounded-full text-sm sm:text-base font-medium hover:scale-105 shadow-md hover:shadow-lg transition duration-300"
                  >
                    {therapy}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 flex flex-row gap-6 items-start sm:items-center shadow-lg rounded-lg p-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> I am from
                </h3>
                <p className="text-gray-700 ml-5 text-sm sm:text-base">
                  Chennai, India
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FaGlobe className="text-green-500" /> Languages
                </h3>
                <p className="text-gray-700 ml-5 text-sm sm:text-base">
                  English, Hindi
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white shadow-lg rounded-lg">
              <Testimonials />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TherapistProfile;
