
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurProject from './pages/OurProject.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'
import TestimonialsPage from './pages/TestimonialsPage.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Loader from './components/Loader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SocialButtons from './components/SocialButtons.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    // Only show loader on initial app load
    if (initialLoad) {
      const timer = setTimeout(() => {
        setLoading(false)
        setInitialLoad(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (loading && initialLoad) {
    return <Loader />
  }

  return (
    <LanguageProvider>
      <Router>
        <SearchProvider>
          <ScrollToTop />
          <SocialButtons />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<OurProject />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/search-results" element={<SearchResults />} />
          </Routes>
        </SearchProvider>
      </Router>
    </LanguageProvider>
  )
}

export default App
