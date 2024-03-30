// AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import Footer from './Footer';
import Nav from './Nav';
import pic from '../assets/images/Kronor 1.jpg';
import pic2 from '../assets/images/Veri.jpg';
import Footer from './Footer';


const OurStartups = () => {

    return (
        <div className="our-startups">
            <Nav />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="title"
            >
                <h1 className="big-title">Our <br /> Startups</h1>
                <p className="mid-text">
                    Our startup incubator program provides early-stage startups with access to mentorship, resources, and funding to help them grow and scale their businesses.        </p>
            </motion.div>



            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="header-container"
            >
                <h1 className="header">Recent Projects</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="time-container"
            >
                {/* <div className="team-member-text">
          <p>Core Team</p>
          </div> */}
                <div className="our-start">
                    <div className="startup">
                        <img src={pic} alt="Team Member 1" className="startup-image" />
                        <div className="code">
                            <div className="dive">
                                <h3>About Kronor</h3>
                            </div>
                            <div className='prep'>
                                <p>Kronor Limited stands as a beacon of excellence in the UK's IT services landscape, delivering unparalleled solutions to clients across industries. With a strategic expansion into Africa, Kronor Limited is poised to revolutionize the global IT outsourcing paradigm. Our Offshore Development Centers (ODCs) in Africa are at the forefront of innovation, specializing in software development, application maintenance, testing, and a myriad of IT services. Through this expansion, Kronor Limited reaffirms its commitment to empowering businesses with transformative technology solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="theme">
                        <img src={pic2} alt="Team Member 2" className="startup-image" />
                        <div className="code">
                            <div className="dive">
                                <h3>About Veri</h3>
                            </div>
                            <div className='prep'>
                                <p>Scan and Verify: Simply scan a product's barcode or QR code using your phone's camera. Veri will instantly check it against a comprehensive database of legitimate products to determine its authenticity.
                                    Track Your Consultations: Keep a record of all the products you've checked within the app. This built-in consultation history allows you to easily revisit past verifications.
                                    Personalized Dashboard: Your Veri dashboard provides a clear overview of your product consultations. You can access information like product details, verification results, and dates for easy reference.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>



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

export default OurStartups;
