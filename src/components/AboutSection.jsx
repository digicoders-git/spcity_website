import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-18">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative group animate-fade-in-up">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="SP-City Real Estate"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                <div className="text-2xl font-black text-red-600">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-black text-red-600">500+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                 About SP-City
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Your Trusted <span className="text-red-600">Real Estate</span> Partner
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full mb-8 animate-pulse"></div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Welcome to SP-City, your trusted partner in the world of real
                estate. With a passion for connecting people with their dream
                properties, we are dedicated to providing exceptional service and
                delivering outstanding results.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At SP-City, we pride ourselves on being a trusted and reputable
                name in the real estate industry. With over 15 years of experience and a
                dedicated team of professionals, we are committed to providing
                exceptional service to our clients.
              </p>

              {/* Feature Points */}
              <div className="space-y-4 mb-8">
                {[
                  "Expert guidance throughout the process",
                  "Transparent and honest dealings",
                  "24/7 customer support",
                  "Best market prices guaranteed"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-9 py-2 rounded-xl transition-all duration-300 hover:scale-105">
                   Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;