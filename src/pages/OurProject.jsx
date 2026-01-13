import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import AppointmentSection from "../components/AppointmentSection";
import FeaturedProperties from "../components/FeaturedProperties";

const services = [
  {
    title: "Kitchens",
    content:
      "At Real Estate, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
  },
  {
    title: "Loft Conversions",
    content:
      "Transform unused loft space into functional and stylish living areas, from bedrooms to home offices, with smart layouts and seamless integration.",
  },
  {
    title: "Bathrooms",
    content:
      "Elegant and practical bathroom solutions combining modern design, premium materials, and efficient layouts.",
  },
  {
    title: "Extensions",
    content:
      "Expertly planned home extensions that expand your living space while maintaining quality and compliance.",
  },
  {
    title: "Restorations",
    content:
      "Preserving the character of your property while upgrading it to modern living standards.",
  },
  {
    title: "External Works",
    content:
      "Professional exterior upgrades including landscaping and structural enhancements.",
  },
];

const OurProject = () => {
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
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
            ✨ Our Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What We <span className="text-red-400">Do</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200">
            Discover our range of services designed to transform your property
          </p>
        </div>
      </section>

     <FeaturedProperties />

      {/* <TestimonialsSection /> */}
      <FaqSection />
      <AppointmentSection />

      <Footer />
    </>
  );
};

export default OurProject;
