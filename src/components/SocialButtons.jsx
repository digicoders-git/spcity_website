import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter,FaWhatsapp } from "react-icons/fa";

const SocialButtons = () => {
  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      url: "https://instagram.com", 
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    { 
      name: "Facebook", 
      icon: <FaFacebookF />, 
      url: "https://facebook.com", 
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    { 
      name: "Twitter", 
      icon: <FaTwitter />, 
      url: "https://twitter.com", 
      color: "from-sky-400 to-sky-500",
      hoverColor: "hover:from-sky-500 hover:to-sky-600"
    },
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp />, 
      url: "https://wa.me/8112580707", 
      color: "from-green-400 to-green-500",
      hoverColor: "hover:from-sky-500 hover:to-sky-600"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={social.name}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            {/* Pulsing Ring */}
            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full animate-ping opacity-75`}></div>
            
            {/* Button */}
            <div className={`relative w-10 h-10 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}>
              <span className="text-white text-xl">{social.icon}</span>
            </div>

            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Follow us on {social.name}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-gray-900"></div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
