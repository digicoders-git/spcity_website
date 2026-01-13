const services = [
  {
    id: "01",
    title: "Property Sales",
    desc: "Find your dream home with SP-City - our expert team will guide you through the process and ensure a smooth transaction.",
  },
  {
    id: "02",
    title: "Property Rentals",
    desc: "Find your dream rental property with SP-City, offering a variety of options to suit your needs and preferences.",
  },
  {
    id: "03",
    title: "Property Management",
    desc: "Trust SP-City to handle the day-to-day management of your property, maximizing its value and minimizing your stress.",
  },
  {
    id: "04",
    title: "Lucrative Investments",
    desc: "SP-City presents lucrative investment opportunities in the real estate market, providing high returns on investments.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Card Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-16 sm:py-24 shadow-2xl border border-white/20">
          
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              What We <span className="text-red-600">Do</span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Simplifying the journey of buying, selling, and renting properties.
              Our expert team provides comprehensive real estate solutions tailored
              to your needs
            </p>

            {/* Underline */}
            <div className="mt-8 flex justify-center">
              <span className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Services */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div 
                key={item.id} 
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-red-100 border border-gray-200 hover:border-red-200 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="inline-block text-2xl font-black text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.id}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>

                <div className="mt-4 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
