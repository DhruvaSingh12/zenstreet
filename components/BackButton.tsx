import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center ml-2 gap-2 px-2 py-2 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full shadow-sm transition-colors duration-200"
    >
      <FaArrowLeft className="text-xl" />
    </button>
  );
};

export default BackButton;
