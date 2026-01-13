import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const properties = [
  {
    id: 1,
    category: "APARTMENT - SP CITY",
    title: "Modern Stylish Apartment",
    desc: "Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.",
    fullDesc: "This stunning modern apartment offers the perfect blend of style and functionality. Located in the heart of SP City, it features high-end finishes, spacious rooms, and breathtaking views. The open-plan living area is perfect for entertaining, while the bedrooms provide a peaceful retreat.",
    price: "₹1,50,00,000",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    beds: 3,
    baths: 2,
    area: "1,450 sq ft",
    location: "SP City, Prayagraj",
    features: ["Modern Kitchen", "Parking Space", "24/7 Security", "Gym Access", "Swimming Pool", "Garden Area"]
  },
  {
    id: 2,
    category: "APARTMENT - SP CITY",
    title: "Contemporary Apartments",
    desc: "Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.",
    fullDesc: "These contemporary apartments redefine urban luxury. With state-of-the-art amenities and prime location, they offer an unparalleled living experience. Floor-to-ceiling windows flood the space with natural light, while premium fixtures add a touch of elegance.",
    price: "₹2,25,00,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    beds: 4,
    baths: 3,
    area: "2,100 sq ft",
    location: "SP City Center, Prayagraj",
    features: ["Smart Home System", "Balcony", "Premium Flooring", "Modular Kitchen", "Power Backup", "Clubhouse"]
  },
  {
    id: 3,
    category: "VILLA - SP CITY",
    title: "Suburban Single-Family Homes",
    desc: "Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.",
    fullDesc: "This beautiful suburban villa offers the perfect escape from city life while maintaining easy access to urban amenities. Featuring a large garden, multiple living spaces, and premium construction quality, it's ideal for families seeking space and comfort.",
    price: "₹3,75,00,000",
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
    beds: 5,
    baths: 4,
    area: "3,500 sq ft",
    location: "SP City Suburbs, Prayagraj",
    features: ["Private Garden", "Garage", "Home Office", "Terrace", "Servant Quarter", "Solar Panels"]
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const found = properties.find(p => p.id === parseInt(id));
    setProperty(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pt-20" style={{
        backgroundImage: `url('${property.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 w-full px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg mb-6 hover:bg-white/20 transition-all duration-300"
            >
              <FaArrowLeft /> Back
            </button>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {property.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <FaMapMarkerAlt /> {property.location}
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Price & Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Price</div>
                    <div className="text-4xl font-black text-red-600">{property.price}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <FaBed className="text-3xl text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.beds}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <FaBath className="text-3xl text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.baths}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <FaRuler className="text-3xl text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-600">Area</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Property</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{property.fullDesc}</p>
                <p className="text-gray-600 leading-relaxed">{property.desc}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Interested?</h3>
                <p className="mb-6 text-white/90">Contact us for more information or to schedule a viewing</p>
                
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <FaPhone className="text-xl" />
                    <div>
                      <div className="text-sm text-white/80">Call Us</div>
                      <div className="font-bold">+91 98765 43210</div>
                    </div>
                  </a>
                  
                  <a href="mailto:contact@spcity.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <FaEnvelope className="text-xl" />
                    <div>
                      <div className="text-sm text-white/80">Email Us</div>
                      <div className="font-bold">contact@spcity.com</div>
                    </div>
                  </a>
                </div>

                <button className="w-full mt-6 bg-white text-red-600 px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PropertyDetails;
