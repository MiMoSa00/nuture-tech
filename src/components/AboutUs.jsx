// AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import Footer from './Footer';
import Nav from './Nav';
import mainImage from '../assets/images/group.jpg';



import teamMember5 from '../assets/images/man3.jpg';
;
import teamMember7 from '../assets/images/man4.jpg';
import teamMember8 from '../assets/images/mine.jpg';
import teamMember9 from '../assets/images/man5.jpg';

import teamMember11 from '../assets/images/man6.jpg';

import teamMember13 from '../assets/images/man7.jpg';
import Footer from './Footer';
import Card from './Card';

const AboutUs = () => {
  const cardsData = [
    {
      title: 'Startup Incubator',
      description: 'Our startup incubator program provides early-stage startups with access to mentorship, resources, and funding to help them grow and scale their businesses.',
    },
    {
      title: 'Accelerator Program',
      description: 'Our accelerator program is designed for high-growth startups looking to accelerate their growth and reach the next level. Participants receive intensive mentorship, networking opportunities, and support to scale their businesses rapidly.',
    },
    {
      title: 'Co-working Space',
      description: 'Our co-working space provides Tech entrepreneurs with a collaborative and inspiring environment to work on their projects, network with other members, and access resources such as high-speed internet, meeting rooms, and event spaces.',
    },
    {
      title: ' Events and  Workshops',
      description: 'We regularly host events, workshops, and networking opportunities to bring together members of the tech community, share knowledge, and foster collaboration.',
    },

  ];
  return (
    <div className="about-us">
      <Nav />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title-container"
      >
        <h1 className="large-title">About Us</h1>
        <p className="medium-text">
          Nuture Tech Hub is a vibrant community of entrepreneurs, developers, designers, and innovators who are passionate about technology and entrepreneurship. Founded with the vision of creating a supportive and collaborative environment for tech startups, we offer a range of programs and services to help entrepreneurs at every stage of their journey.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="main-image-container"
      >
        <img src={mainImage} alt="Main" className="main-image" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="team-header-container"
      >
        <h1 className="team-header">Our Team</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="team-members-container"
      >
        <div className="team-member-text">
          <p>Core Team</p>
          </div>
        <div className="team-members">
          
        
          <div className="team-member">
            <img src={teamMember5} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Sam Adetutu</h3>
              </div>
            <div className='per'>
              <p>CEO</p>
              </div>
            </div>
          </div>
         
          <div className="team-member">
            <img src={teamMember7} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Nathian</h3>
              </div>
            <div className='per'>
              <p>Lead UI/UX and Cybersecurity Analysts</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={teamMember8} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Christian Nortan</h3>
              </div>
            <div className='per'>
              <p>CTO</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={teamMember9} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Matthew</h3>
              </div>
            <div className='per'>
              <p>Lead Data Scientist</p>
              </div>
            </div>
          </div>
          
          <div className="team-member">
            <img src={teamMember11} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Malik</h3>
              </div>
            <div className='per'>
              <p>Lead Web Developer</p>
              </div>
            </div>
          </div>
        
          <div className="team-member">
            <img src={teamMember13} alt="Team Member 3" className="team-member-image" />
            <div className="card-overlay">
            <div className="dove">
              <h3>Christian</h3>
              </div>
            <div className='per'>
              <p>Lead Mobile Developer</p>
              </div>
            </div>
          </div>
          
         
        </div>
      </motion.div>

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutUs;
