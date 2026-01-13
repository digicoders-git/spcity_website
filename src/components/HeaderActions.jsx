import { Search, Globe, X, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useSearch } from "../context/SearchContext.jsx";
import { translations } from "../utils/translations.js";

const HeaderActions = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { language, changeLanguage } = useLanguage();
  const { performSearch } = useSearch();
  const langRef = useRef(null);
  const t = translations[language];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang.code);
    setShowLangDropdown(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      performSearch(searchInput);
      setShowSearch(false);
      setSearchInput("");
    }
  };

  const selectedLang = languages.find(l => l.code === language);

  return (
    <>
      <div className="flex items-center gap-5 ml-6">
        <button
          onClick={() => setShowSearch(true)}
          aria-label="Search"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        >
          <Search size={18} />
        </button>

        <div className="relative" ref={langRef}>
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            aria-label="Change Language"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Globe size={20} />
          </button>

          {showLangDropdown && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 animate-fade-in-up z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Language</p>
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-red-50 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{lang.flag}</span>
                    <span className="font-medium text-gray-700 group-hover:text-red-600 transition-colors">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check size={18} className="text-red-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {showSearch && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl mx-4 animate-slide-down">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{t.searchProperties}</h3>
              <button
                onClick={() => setShowSearch(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSearch} className="p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-12 pr-28 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-gray-900"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  {t.searchNow}
                </button>
              </div>
            </form>
            <div className="px-6 pb-6">
              <p className="text-sm text-gray-500 mb-3">{t.popularSearches}</p>
              <div className="flex flex-wrap gap-2">
                {[t.luxuryVillas, t.apartments2BHK, t.commercialSpaces, t.prayagrajProperties].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchInput(tag)}
                    className="px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderActions;
