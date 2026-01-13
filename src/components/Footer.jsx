import React from "react";
import {
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaArrowUp,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../utils/translations.js";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = [
    { name: t.home, path: "/" },
    { name: t.aboutUs, path: "/about" },
    { name: t.ourProjects, path: "/project" },
    { name: t.ourGallery, path: "/gallery" },
    { name: t.contactUs, path: "/contact" },
  ];

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 text-2xl font-bold mb-6">
            <Link to="/" className="group">
              <img
                src="/Logo SVG.svg"
                alt="Logo"
                className="w-16 h-16 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-2xl"
              />
            </Link>
            {/* <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SP-City</span> */}
          </div>
          <p className="leading-relaxed text-gray-600 mb-6">{t.footerDesc}</p>
        </div>

        {/* Quick Links */}
        <div className="animate-fade-in-up animation-delay-300">
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
            {t.quickLinks}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fade-in-up animation-delay-500">
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
            {t.contactInfo}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">{t.address}</div>
                <div className="text-gray-600 text-sm">
                  123 SP City, Prayagraj Uttar Pradesh
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">{t.email}</div>
                <div className="text-gray-600 text-sm">contact@spcity.com</div>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">{t.phone}</div>
                <div className="text-gray-600 text-sm">+91 98765 43210</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="animate-fade-in-up animation-delay-700">
          <h3 className="text-xl font-bold text-gray-900 mb-6 relative">
            {t.newsletter}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <p className="mb-6 text-gray-600">{t.newsletterDesc}</p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.enterEmail}
                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-red-500 transition-colors duration-300 text-gray-900 placeholder-gray-500"
              />
              <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                <FaSearch />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {[FaTwitter, FaPinterestP, FaYoutube, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-100 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
                  >
                    <Icon className="text-gray-600 group-hover:text-white" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            {t.copyright} || {t.designedBy}{" "}
            <a
              href="https://digicoders.in/"
              className="text-red-500 font-semibold hover:underline"
            >
              {" "}
              Team Digicoders
            </a>
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-300"
            >
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
