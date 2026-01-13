import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "RAJESH KUMAR",
    text: "SP-City helped me find my dream home in the heart of the city. Their professional team guided me through every step, making the entire process smooth and hassle-free. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "AMIT PATEL",
    text: "Outstanding experience with SP-City! Their market knowledge and negotiation skills saved me both time and money. I couldn't be happier with my new property investment.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* White Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-16 sm:py-24 shadow-2xl border border-white/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT CONTENT */}
            <div className="animate-fade-in-up">
              <span className="text-red-600 text-6xl font-bold leading-none animate-pulse">
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                Read from clients who have found the perfect place where they
                can <span className="text-red-600">create…</span>
              </h2>

              {/* underline */}
              <div className="mt-8">
                <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full animate-pulse"></span>
              </div>

              <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover testimonials from satisfied clients who have found
                their dream properties with SP-City, the trusted experts in
                helping you find the perfect place to call home.
              </p>

             
            </div>

            {/* RIGHT TESTIMONIALS */}
            <div className="space-y-6">
              {testimonials.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-red-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-3">
                    <img 
                      src={item.avatar} 
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-red-200 group-hover:border-red-400 transition-colors duration-300"
                    />
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    "{item.text}"
                  </p>
                  <div className="mt-2 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;