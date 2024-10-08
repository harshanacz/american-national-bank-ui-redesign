import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import OffersSection from './components/OffersSection'
import ServicesSection from './components/ServicesSection'
import OurMessageSection from './components/OurMessageSection'
import Footer from './components/Footer'
import Carousel from './components/CarouselSection'


const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <OffersSection />
    <ServicesSection />
    <FeatureSection />
    <OurMessageSection />
    <Carousel />
    <Footer/>
    </>
  )
}

export default App
