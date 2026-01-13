import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaTimes, FaArrowRight, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What area are you based in?",
    a: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on scope and complexity. After an initial consultation, we provide a clear timeline tailored to your project.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, we offer free, no-obligation quotes following an initial discussion of your requirements.",
  },
  {
    q: "Will I need planning permission for my project?",
    a: "This depends on the type of work. We guide you through planning requirements and handle permissions where needed.",
  },
  {
    q: "Do you provide a guarantee for your work?",
    a: "Absolutely. All our work is backed by a guarantee for quality and peace of mind.",
  },
  {
    q: "Can I stay in my home while the work is being done?",
    a: "In most cases, yes. We plan work carefully to minimize disruption and ensure safety.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply get in touch with us to arrange a consultation. We'll guide you through every step.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT CONTENT */}
        <div className={`sticky top-24 transition-all duration-700 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <FaQuestionCircle /> FAQs
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Got <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Questions?</span>
            <br />We Have Answers
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Can't find what you're looking for? Send us your enquiry and we'll get back to you promptly
          </p>

          <Link to="/contact" className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="font-semibold">Get in Touch</span>
            <span className="bg-white text-red-600 p-2 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <FaArrowRight />
            </span>
          </Link>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-red-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className={`space-y-4 transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
                active === index ? 'shadow-2xl scale-105 border-red-200' : 'hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-6 group"
              >
                <h3 className={`text-lg font-bold pr-4 transition-colors duration-300 ${
                  active === index ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                }`}>
                  {item.q}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  active === index ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-600 group-hover:bg-red-100'
                }`}>
                  {active === index ? <FaTimes /> : <FaPlus />}
                </div>
              </button>

              <div className={`transition-all duration-500 overflow-hidden ${
                active === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
