import Button from "./Button";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../utils/translations.js";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative min-h-screen flex items-center pb-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 text-white pt-32">
        <div className="max-w-6xl">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
            {t.heroTitle.split(' ').slice(0, 3).join(' ')} <br />
            <span className="text-red-400 animate-bounce inline-block">{language === 'hi' ? 'प्रॉपर्टी' : 'Property'}</span> {language === 'hi' ? 'खोजें' : 'for Your'} <br />
            {language === 'hi' ? '' : 'Lifestyle'}
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-200 mb-14 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-300">
            {t.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
