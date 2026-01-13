import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../utils/translations.js";
import HeaderActions from "./HeaderActions.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: t.home, path: "/" },
    { name: t.aboutUs, path: "/about" },
    { name: t.ourProjects, path: "/project" },
    { name: t.ourGallery, path: "/gallery" },
    { name: t.contactUs, path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          {/* Left - Logo */}
          <div className="flex justify-start">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src="/Logo SVG.svg" alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg" />
            </Link>
          </div>

          {/* Center - Menu */}
          <nav className="flex gap-4 font-semibold justify-center whitespace-nowrap">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 group ${isActive(item.path)
                    ? 'text-red-600 bg-red-50'
                    : 'hover:text-red-600 hover:bg-gray-100'
                  }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right - Actions */}
          <div className="flex justify-end items-center">
            <HeaderActions />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <img src="/Logo SVG.svg" alt="Logo" className="w-12 h-12 drop-shadow-lg" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white text-gray-900 px-6 py-8 space-y-6 border-t border-gray-200 animate-fade-in-up shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-lg font-medium hover:translate-x-2 transition-all duration-300 ${isActive(item.path) ? 'text-red-600' : 'hover:text-red-600'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
