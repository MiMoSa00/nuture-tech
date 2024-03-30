

import React, { useState, useEffect } from 'react';
// import CarouselItem from './CarouselItem'
import {motion} from 'framer-motion'
// import './TextSlider.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
     
      description: "Nuturing Innovation, Empowering Growth. This mantra embodies our commitment to our nturing talent, fostering creativity, and empowering individuals and businesses to reach their full potential. Through collaboration, education, and community support, we believe in creating a brighter future for technology and beyond",
      title: "Mantra",
    },
    {
      
      description: "At NurtureTech Hub, our mission is to foster innovation and empower individuals to thrive in the ever-evolving field of technology. We believe in transforming mere technological or coding skills into global solutions that drive positive change.",
      title: "Mission",
    },
    {
      
      
     description: "Through mentorship, education, and community support, we aim to incubate ideas and guide aspiring techies towards success. Our goal is not only to develop technical proficiency but also to instill a mindset of problem-solving and innovation that transcends boundaries.",
     title: "Transformation"

    },
    {
      
      
 description: "Our values are rooted in inclusivity, integrity, and excellence. We believe in creating an inclusive community where diversity is celebrated and every individual is valued. With integrity as our guiding principle, we uphold the highest ethical standards in all our interactions.",
 title: "Values"
    },
 
    {
      

        description: "Our vision is to create a thriving ecosystem where individuals are empowered to turn their ideas into reality and make a positive impact in the world. We envision a future where technology is leveraged for social good and economic advancement.",
        title: "Vision"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);
  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide + 1)  % slides.length);
  };
  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="title-container"
  >
   
    <div className='max'>
      
        <div className="caro">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {/* <p className='texter'>{slide.description}</p> */}
            <h3 className='texter_2'>{slide.title}</h3> 
          
            {/* <CarouselItem /> */}
          </div>
        ))}
      </div>


    <div className="text-slider">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <p className='texter'>{slide.description}</p>
            {/* <h3 className='texter_2'>{slide.title}</h3>  */}
          
            {/* <CarouselItem /> */}
          </div>
        ))}
      </div>
    </div>
    <div className='carousel-buttons'>
              <button onClick={goToPrevSlide} className='button-arrows'>
                <span className="material-symbols-outlined">arrow_back_ios</span>
              </button>
              <button onClick={goToNextSlide} className='button-arrows'>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
              </button>
            </div>
            </div>
            </motion.div>
    
  );
};

export default Carousel;