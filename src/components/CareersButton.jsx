const CareersButton = ({ label = "Careers", onClick }) => {
  return (
    <button
onClick={onClick}
      className="
        px-8 py-2
        rounded-xl
        bg-gradient-to-r from-[#ef4444] to-[#ffffff]
        text-black
        font-semibold
        text-base
        shadow-md
        transition-all duration-300
        hover:shadow-xl hover:scale-105
        active:scale-95
      "
    >
      {label}
    </button>
  );
};

export default CareersButton;
