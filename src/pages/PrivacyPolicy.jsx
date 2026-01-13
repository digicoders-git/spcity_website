import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaShieldAlt, FaLock, FaUserShield, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      title: "Information We Collect",
      icon: <FaUserShield />,
      content: "We collect information you provide directly to us, including name, email, phone number, and property preferences. We also collect information automatically when you use our services, such as IP address, browser type, and usage data."
    },
    {
      title: "How We Use Your Information",
      icon: <FaLock />,
      content: "We use your information to provide and improve our services, communicate with you about properties, send marketing materials (with your consent), and comply with legal obligations."
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt />,
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
    },
    {
      title: "Your Rights",
      icon: <FaCheckCircle />,
      content: "You have the right to access, correct, or delete your personal information. You can also object to processing, request data portability, and withdraw consent at any time. Contact us to exercise these rights."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center pt-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"></div>
        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <FaShieldAlt /> Privacy Policy
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Your <span className="text-red-400">Privacy</span> Matters
          </h1>
          <p className="text-xl text-gray-200">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Introduction */}
          <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              At SP-City, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={`bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 mt-12 text-white text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-white/90 mb-6 text-lg">
              If you have any questions about this Privacy Policy, please contact us
            </p>
            <Link
  to="/contact"
  className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
>
  Contact Us
</Link>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
