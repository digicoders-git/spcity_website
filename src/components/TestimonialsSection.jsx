import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "James Richardson",
    role: "Property Owner",
    text:
      "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sophie Williams",
    role: "Homeowner",
    text:
      "I couldn't be happier with my loft conversion. Attention to detail and quality of work were outstanding.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Daniel Foster",
    role: "Real Estate Investor",
    text:
      "Refit transformed our outdoor space beautifully. Completed on time with excellent finish.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Charlotte Harris",
    role: "Business Owner",
    text:
      "From consultation to final touches, everything was delivered perfectly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Oliver Bennett",
    role: "Homeowner",
    text:
      "Fantastic workmanship! The renovation feels luxurious and stress-free.",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Emily Carter",
    role: "Property Developer",
    text:
      "Top-notch craftsmanship and professional service throughout the project.",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
];

const Card = ({ item, index }) => (
  <div className="min-w-[380px] group">
    <div className="bg-white rounded-3xl p-8 mx-3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
      
      <div className="relative">
        <FaQuoteLeft className="text-4xl text-red-500 mb-4 opacity-20" />
        
        <div className="flex mb-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-lg" />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed text-base">
          {item.text}
        </p>
        
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{item.name}</div>
            <div className="text-sm text-gray-500">{item.role}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-gray-50 to-white py-18 overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <div className={`text-center mb-16 px-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <span>💬</span> Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our happy clients about their experience working with us and the quality of our craftsmanship
          </p>
        </div>

        {/* TOP ROW – LEFT TO RIGHT */}
        <div className="flex overflow-hidden mb-8">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials].map((item, i) => (
              <Card key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* BOTTOM ROW – RIGHT TO LEFT */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...testimonials, ...testimonials].map((item, i) => (
              <Card key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
