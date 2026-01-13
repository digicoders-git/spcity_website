import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFileContract, FaGavel, FaHandshake, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
      title: "Acceptance of Terms",
      icon: <FaHandshake />,
      content: "By accessing and using SP-City's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "Use of Services",
      icon: <FaFileContract />,
      content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that violates any applicable laws or regulations."
    },
    {
      title: "Intellectual Property",
      icon: <FaGavel />,
      content: "All content on our website, including text, graphics, logos, and images, is the property of SP-City and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our permission."
    },
    {
      title: "Limitation of Liability",
      icon: <FaExclamationTriangle />,
      content: "SP-City shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for our services."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center pt-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"></div>
        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <FaFileContract /> Terms of Service
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Terms & <span className="text-red-400">Conditions</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              These Terms of Service constitute a legally binding agreement between you and SP-City. Please read these terms carefully before using our services. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>

          {/* Terms Sections */}
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
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mt-12 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h3>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Contact Section */}
          <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 mt-12 text-white text-center transition-all duration-700 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl font-bold mb-4">Questions About Terms?</h3>
            <p className="text-white/90 mb-6 text-lg">
              If you have any questions about these Terms of Service, please contact us
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfService;
