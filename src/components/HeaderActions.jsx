import { User, Lock, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { authAPI } from "../utils/api";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../utils/translations.js";

const HeaderActions = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  
  const { language } = useLanguage();
  const t = translations[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await authAPI.login(formData);
      if (result.success) {
        const { token, user } = result.data;
        
        // Dynamic Associate Panel URL
        const adminUrl = import.meta.env.VITE_ASSOCIATE_PANEL_URL || 
                         (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
                           ? "http://localhost:5173" 
                           : "https://spcity-adminpanel.vercel.app");
        
        // Redirect with auth info for auto-login. Redirect to root since /login is handled by root in App.jsx
        const redirectUrl = `${adminUrl}/?autoLogin=true&token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`;
        
        console.log("Redirecting to:", redirectUrl);
        window.location.href = redirectUrl;
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-5 ml-6">
        <button
          onClick={() => setShowLoginModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          <User size={18} />
          <span className="hidden lg:inline">{t.associateLogin}</span>
        </button>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="relative h-32 bg-gradient-to-br from-red-600 to-black p-8">
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-white mt-2">{t.associateLogin}</h3>
              <p className="text-white/80 text-sm">Welcome back! Please login to your panel.</p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium animate-shake">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">{t.usernameOrEmail}</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                    <input
                      type="text"
                      name="identifier"
                      value={formData.identifier}
                      onChange={handleInputChange}
                      placeholder={t.enterYourId}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all text-gray-900 font-medium"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">{t.password}</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all text-gray-900 font-medium"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-red-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      t.loginToPanel
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderActions;
