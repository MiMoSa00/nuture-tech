import React from 'react';
import Nav from './components/Nav';
 import Carousel from './Carousel'
import Footer from './components/Footer';
import Layout from './components/Layout';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <div >
      <Layout>
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title-container"
      >
      <h1 className='title'>  Where Aspiring 
    <br /> Techies Take Flight</h1>
    <div className='text'>
    <p>Nurture TechHub embodies the essence of nurturing growth within the technological realm. Derived from "Incubatus,"  which signifies the process of nurturing until hatching, our platform is dedicated to providing a supportive environment for aspiring  tech enthusiasts to cultivate their skills and ideas.</p>
    <div className='box'>
    <h2>Pitch</h2>
   
    </div>
    </div>
    </motion.div>    
    </Layout>
    <Carousel />
    <Footer />
    
    </div>
  );
};


export default Home
