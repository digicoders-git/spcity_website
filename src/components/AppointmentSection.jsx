import React, { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      className="relative py-20 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              📞 Contact Us
            </div>

            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              Ready to Find Your <span className="text-red-400">Dream Home?</span>
            </h2>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Schedule a consultation with our expert team. We're here to guide you through every step of your real estate journey.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Free Property Consultation</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Expert Market Analysis</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/20">
              {/* Heading */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                  Schedule an <span className="text-red-600">Appointment</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto animate-pulse"></div>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 outline-none transition-all duration-300 group-hover:border-red-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 outline-none transition-all duration-300 group-hover:border-red-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 outline-none transition-all duration-300 group-hover:border-red-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 outline-none transition-all duration-300 group-hover:border-red-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    📞 REQUEST A CALL BACK
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;