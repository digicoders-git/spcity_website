import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchableContent = [
    { id: 1, title: "Luxury Villa in Prayagraj", type: "Property", category: "Residential", description: "Beautiful 4BHK villa with modern amenities", path: "/property/1", keywords: "villa luxury 4bhk residential prayagraj" },
    { id: 2, title: "2BHK Apartment", type: "Property", category: "Residential", description: "Affordable 2BHK apartment in prime location", path: "/property/2", keywords: "apartment 2bhk residential affordable" },
    { id: 3, title: "Commercial Space", type: "Property", category: "Commercial", description: "Prime commercial property for business", path: "/property/3", keywords: "commercial office space business" },
    { id: 4, title: "About SP-City", type: "Page", category: "Information", description: "Learn about our company and services", path: "/about", keywords: "about company services team mission vision" },
    { id: 5, title: "Our Projects", type: "Page", category: "Information", description: "View all our completed and ongoing projects", path: "/project", keywords: "projects portfolio work completed ongoing" },
    { id: 6, title: "Gallery", type: "Page", category: "Information", description: "Browse our property gallery", path: "/gallery", keywords: "gallery images photos properties showcase" },
    { id: 7, title: "Contact Us", type: "Page", category: "Information", description: "Get in touch with our team", path: "/contact", keywords: "contact phone email address location" },
    { id: 8, title: "Residential Properties", type: "Service", category: "Service", description: "Find your dream home with our residential properties", path: "/project", keywords: "residential home house apartment villa" },
    { id: 9, title: "Commercial Properties", type: "Service", category: "Service", description: "Invest in commercial real estate", path: "/project", keywords: "commercial office shop retail investment" },
    { id: 10, title: "Property Management", type: "Service", category: "Service", description: "Professional property management services", path: "/project", keywords: "management maintenance rental property" },
  ];

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setSearchQuery("");
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.keywords.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );

    setSearchResults(results);
    setSearchQuery(query);
    navigate("/search-results");
  };

  return (
    <SearchContext.Provider value={{ searchResults, searchQuery, performSearch, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
