import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext.jsx";
import { useTranslation } from "../hooks/useTranslation.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Search, FileText, Home, Briefcase, Image } from "lucide-react";

const SearchResults = () => {
  const { searchResults, searchQuery } = useSearch();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case "Property": return <Home className="text-red-600" size={24} />;
      case "Page": return <FileText className="text-blue-600" size={24} />;
      case "Service": return <Briefcase className="text-green-600" size={24} />;
      default: return <Search className="text-gray-600" size={24} />;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-red-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-900">
                {t.searchProperties || "Search Results"}
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              {searchResults.length} results found for "<span className="font-semibold text-red-600">{searchQuery}</span>"
            </p>
          </div>

          {/* Results */}
          {searchResults.length > 0 ? (
            <div className="grid gap-6">
              {searchResults.map((result) => (
                <Link
                  key={result.id}
                  to={result.path}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {result.title}
                        </h3>
                        <span className="px-3 py-1 bg-red-50 text-red-600 text-sm font-medium rounded-full">
                          {result.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 text-lg">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                          {result.category}
                        </span>
                        <span className="text-red-600 font-medium group-hover:underline">
                          {t.viewDetails || "View Details"} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-400" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.noResults || "No Results Found"}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Try searching with different keywords
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                {t.home || "Go Home"}
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
