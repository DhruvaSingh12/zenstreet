"use client";

import Header from "@/components/Header";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <BounceLoader className="text-violet-500" size={40} />
      </div>
    </div>
  );
};

export default Loading;
