import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    category: "APARTMENT - SP CITY",
    title: "Modern Stylish Apartment",
    desc: "Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.",
    price: "₹1,50,00,000",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 2,
    category: "APARTMENT - SP CITY",
    title: "Contemporary Apartments",
    desc: "Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.",
    price: "₹2,25,00,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    category: "VILLA - SP CITY",
    title: "Suburban Single-Family Homes",
    desc: "Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.",
    price: "₹3,75,00,000",
    image:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Featured <span className="text-red-600">Properties</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Discover our hand-picked selection of top-notch properties with
            outstanding features, guaranteed to meet your real estate needs
            and exceed your expectations.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black text-red-600">
                    {item.price}
                  </p>
                  <Link to={`/property/${item.id}`} className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 font-medium">
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
