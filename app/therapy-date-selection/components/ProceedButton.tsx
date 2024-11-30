"use client";

const ProceedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="items-center flex flex-row justify-center">
      <button
      className="mt-6 px-20 bg-blue-500 text-white font-bold py-3 rounded-3xl shadow-md hover:bg-blue-600"
      onClick={onClick}
    >
      Proceed
    </button>
    </div>
    
  );
};

export default ProceedButton;
