import React, { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactDetails = [
    { icon: <FaPhone />, label: "PHONE", info: "+91 98765 43210", color: "bg-red-500" },
    { icon: <FaEnvelope />, label: "EMAIL", info: "contact@spcity.com", color: "bg-blue-500" },
    { icon: <FaMapMarkerAlt />, label: "ADDRESS", info: "123 SP City, Prayagraj, Uttar Pradesh", color: "bg-green-500" }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT CONTENT */}
        <div className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <span>📞</span> Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We're Excited to <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Connect</span> With You
          </h2>

          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Let us assist you with your real estate needs. Our expert team is ready to help you find your dream property.
          </p>

          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-500 font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-900 font-semibold text-lg">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-red-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className={`transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Contact Form
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-red-500 focus:bg-white transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-red-500 focus:bg-white transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-red-500 focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Request a Call Back
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
