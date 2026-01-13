import React, { useState, useEffect, useRef } from "react";

const OurStorySection = () => {
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

  const milestones = [
    { year: "2009", title: "Founded", desc: "Started with a vision" },
    { year: "2015", title: "500+ Clients", desc: "Reached milestone" },
    { year: "2024", title: "Industry Leader", desc: "Trusted by thousands" }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <span>📖</span> Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Story</span> Behind SP-City
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* LEFT - Image */}
          <div className={`relative group transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Our Story"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Since 2009</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Building Dreams, Creating Legacies
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Founded over a decade ago by <span className="font-semibold text-gray-900">John Oliver</span>, our company was born from a deep understanding of the challenges buyers, sellers, and investors face in the real estate market.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With an unwavering commitment to excellence and a customer-centric approach, we've earned the trust of thousands of clients. Our extensive experience, combined with our team of dedicated professionals, allows us to deliver unparalleled service and superior results.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">✓</span>
                <span className="font-medium">Trusted Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">✓</span>
                <span className="font-medium">Client First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-red-500"
              style={{ transitionDelay: `${400 + idx * 100}ms` }}
            >
              <div className="text-5xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.year}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
