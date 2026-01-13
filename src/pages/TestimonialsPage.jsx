import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";

const TestimonialsPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center pt-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse shadow-lg">
            💬 Client Testimonials
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            What Our <span className="text-red-400">Clients</span> Say
          </h1>
          <p className="text-xl text-gray-200">
            Real stories from real people who found their dream properties with SP-City
          </p>
        </div>
      </section>

      <TestimonialsSection />

      <Footer />
    </>
  );
};

export default TestimonialsPage;
