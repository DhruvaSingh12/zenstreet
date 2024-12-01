"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <Image width={200} height={200} src="/404.png" alt="404 Not Found" />
      <h1 className="text-center text-blue-500 text-3xl md:text-4xl font-medium">
        Oops! Page Not Found
      </h1>
      <div className="gap-y-1">
        <p className="text-center text-gray-500 text-base text-[14px] md:text-[16px]">
          It seems we can&apos;t find the page you&apos;re looking for,
        </p>
        <p className="text-center text-gray-500 text-base text-[14px] md:text-[16px]">
          Let&apos;s get you back on track!
        </p>
      </div>
      <div
        onClick={handleBackToHome}
        className="rounded-full bg-blue-500 text-[20px] text-white py-2 px-6 mt-3 cursor-pointer hover:transition hover:bg-blue-600"
      >
        Back to home
      </div>
    </div>
  );
}

export default NotFound;
