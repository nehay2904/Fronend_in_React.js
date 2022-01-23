
import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import {SliderData} from './data/CarouselData';
import {reviewData} from './data/reviewsData';
import About from './components/About';
import Info from './components/Info';
import AboutKoral from './components/AboutKoral';
import OurProjects from './components/OurProjects';
import Footer from './components/Footer';

function App() {
  return (
      <>
         <Navbar />
         <Carousel slides={SliderData}/>
         <About />
         <Info />
         <AboutKoral />
         <OurProjects />
         
        <Reviews reviews={reviewData}/>
       
      <Footer />
      </>
  );
}

export default App;
