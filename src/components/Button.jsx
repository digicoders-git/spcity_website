const Button = ({ children, variant = "primary", className = "" }) => {
  const base =
    "inline-flex items-center justify-center gap-3 px-8 py-2 rounded-2xl font-bold transition-all duration-300 active:scale-95 hover:scale-105 transform";

  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-2xl shadow-red-600/40 border border-red-400/20",
    secondary:
      "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-2xl shadow-gray-800/40 border border-gray-600/20",
    outline:
      "bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-2xl",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
