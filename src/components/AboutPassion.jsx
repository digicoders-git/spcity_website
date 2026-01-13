const AboutPassion = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* White Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-16 sm:py-20 shadow-2xl border border-white/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT IMAGE */}
            <div className="relative overflow-hidden rounded-3xl group animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern Home"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="text-2xl font-black text-red-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-black text-red-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                ❤️ Our Passion
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-8">
                Connecting people with <span className="text-red-600">perfect homes</span> is our passion.
              </h2>

              {/* underline */}
              <div className="mb-8">
                <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full animate-pulse"></span>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                With a genuine passion for helping people find their dream homes,
                we are dedicated to connecting buyers and sellers in the real
                estate market. Trust SP-City to make your home buying or selling
                experience seamless and satisfying.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 group">
                  <div className="w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">Best Prices</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-300">Trusted Service</span>
                </div>
              </div>

              <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 shadow-lg">
                 READ MORE
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPassion;