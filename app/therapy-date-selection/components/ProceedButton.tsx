"use client";

const ProceedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600"
      onClick={onClick}
    >
      Proceed
    </button>
  );
};

export default ProceedButton;
