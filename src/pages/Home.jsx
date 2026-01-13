import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedProperties from "../components/FeaturedProperties";
import Testimonials from "../components/Testimonials";
import AboutPassion from "../components/AboutPassion";
import AppointmentSection from "../components/AppointmentSection";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeDo />
       <FeaturedProperties />
       <Testimonials />
        <AboutPassion />
        <AppointmentSection />
         <Footer />
    </>
  );
};

export default Home;
