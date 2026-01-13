import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTimes } from "react-icons/fa";
import AppointmentSection from "../components/AppointmentSection";

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "Residential" },
  { id: 2, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", category: "Commercial" },
  { id: 3, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", category: "Residential" },
  { id: 4, url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800", category: "Luxury" },
  { id: 5, url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800", category: "Commercial" },
  { id: 6, url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", category: "Residential" },
  { id: 7, url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800", category: "Luxury" },
  { id: 8, url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800", category: "Commercial" },
  { id: 9, url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", category: "Residential" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
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

  const categories = ["All", "Residential", "Commercial", "Luxury"];
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
            ✨ Our Gallery
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Explore Our <span className="text-red-400">Properties</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200">
            A curated collection of our finest residential and commercial properties, showcasing quality, design, and craftsmanship
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🏠</span> Property Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Latest Projects</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={() => setLightbox(img)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                      {img.category}
                    </div>
                    <div className="text-lg font-bold">View Details</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
            onClick={() => setLightbox(null)}
          >
            <FaTimes className="text-xl" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={lightbox.url}
              alt={lightbox.category}
              className="w-full h-auto rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
                {lightbox.category}
              </div>
            </div>
          </div>
        </div>
      )}

      <AppointmentSection />
      <Footer />
    </>
  );
};

export default Gallery;
