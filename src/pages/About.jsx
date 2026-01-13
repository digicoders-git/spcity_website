import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ClientCentricSection from "../components/ClientCentricSection";
import OurStorySection from "../components/OurStorySection";
import AppointmentSection from "../components/AppointmentSection";

const About = () => {
  return (
    <>
      <Header />
      
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>

        <div className="relative z-10 text-white px-6">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
            ✨ About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
            About <span className="text-red-400 animate-bounce inline-block">SP-City</span>
          </h1>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed animate-fade-in-up animation-delay-300">
            Trusted real estate solutions built on experience, transparency,
            and excellence for over 15 years.
          </p>
          
          {/* Floating Elements */}
          <div className="mt-12 flex justify-center gap-8 animate-fade-in-up animation-delay-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-pulse">
              <div className="text-2xl font-black text-red-400">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl font-black text-red-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}

      <AboutSection />
      <ClientCentricSection />
      <OurStorySection />
      <AppointmentSection />
     

     

      <Footer />
    </>
  );
};

export default About;