import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategorySection from '../pages/CategorySection';
import DestinationSection from '../pages/DestinationSection';
import AboutSection from '../pages/AboutSection';
import TourSection from '../pages/TourSection';
import Gallery from '../pages/GalleryHome';
import Counter from '../pages/Counter';
import TourGuideSection from '../pages/TourGuideSection';
import TestimonialSection from '../pages/TestimonialSection';
import BlogSection from '../pages/BlogSection';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';
import MoryaCabsSection from '../pages/MoryaCabsSection';

const HeroSection = () => {
  return (


    <div className="th-hero-wrapper hero-1" id="hero">
   <Helmet>
  <title>Best Cab Service in Pune | Reliable & Luxury Cabs</title>
  <meta
    name="description"
    content="Experience the best and most reliable cab service in Pune. We offer affordable, luxury, and top-rated taxi services, including outstation rides and airport transfers."
  />
  <meta
    name="keywords"
    content="Reliable Cab Service Pune, Affordable Best Cabs in Pune, Luxury Cab Service Pune, Pune Best Car Service, Highly Rated Cab Service Pune, Pune Best Taxi Booking, Top-Rated Cab Service Pune, Pune Elite Taxi Service, Best 24/7 Cab Service Pune, Pune Premium Taxi Service, Best Pune Taxi Providers, Recommended Cab Service Pune, Best cab service in Pune, Best Cab Service Pune to Mumbai, Best Outstation Cab Service in Pune, Best Taxi Service in Pune, Best cab service Mumbai to Pune, Best cab service from Mumbai airport to Pune, Best Cab Service from Pune to Goa, Best Cab Service from Pune to Mumbai Airport, Best Mumbai Pune cab service, Best Pune to Mumbai cab service"
  />
  <meta property="og:title" content="Best Cab Service in Pune | Morya Cabs" />
  <meta
    property="og:description"
    content="Experience reliable and luxury cab services in Pune. We offer affordable rides to Mumbai, Goa, airport transfers, and more. Book now for a premium experience."
  />
  <meta property="og:url" content="https://moryacab.com/best-cab-service-in-pune" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://moryacab.com/img/best-cab-service-pune.jpg" />
 
</Helmet>


        <Carousel/>
        <MoryaCabsSection/>
      <CategorySection/>
      <DestinationSection/>
      <TourGuideSection/>
      <AboutSection/>
      <TourSection/>
      <Gallery/>
      <Counter/>
      <TestimonialSection/>
      <BlogSection/>
    </div>
  );
};

export default HeroSection;
