import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import FollowUs from "../components/FollowUs";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
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

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", info: "+91 98765 43210", bgColor: "bg-red-500" },
    { icon: <FaEnvelope />, title: "Email", info: "contact@spcity.com", bgColor: "bg-blue-500" },
    { icon: <FaMapMarkerAlt />, title: "Address", info: "123 SP City, Prayagraj UP", bgColor: "bg-green-500" },
    { icon: <FaClock />, title: "Working Hours", info: "Mon - Sat: 9AM - 6PM", bgColor: "bg-purple-500" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-white px-6 max-w-5xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse shadow-lg">
            ✨ Contact Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Get In <span className="text-red-400">Touch</span> With Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            We're just a phone call or message away. Let us help you with buying, selling, or managing your property
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaPhone />
              </div>
              <div className="text-sm text-gray-300 mb-1">Call Us</div>
              <div className="font-bold text-white">+91 98765 43210</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaEnvelope />
              </div>
              <div className="text-sm text-gray-300 mb-1">Email Us</div>
              <div className="font-bold text-white">contact@spcity.com</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaMapMarkerAlt />
              </div>
              <div className="text-sm text-gray-300 mb-1">Visit Us</div>
              <div className="font-bold text-white">Prayagraj, UP</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <FollowUs />

      {/* Map Section */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <FaMapMarkerAlt /> Find Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-gray-600 text-lg">We'd love to meet you in person and discuss your real estate needs</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="h-[500px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.2615788933!2d81.84644!3d25.43512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzA2LjQiTiA4McKwNTAnNDcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">SP-City Office</div>
                    <div className="text-sm text-gray-600">Prayagraj, UP</div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
