


import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 import 'leaflet/dist/leaflet.css';
import Nav from './Nav'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logoimg from '../assets/images/NTGreen.jpg';
import logoes from '../assets/images/NTHgreen.jpg';

const soairHubLocation = {
  lat: 6.57222,
  lng: 3.33528,
};

const ContactUs = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const stickyHeaderHeight = 50;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement what happens when form is submitted
    console.log(formData);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

      setIsSticky(scrollHeight > 100);
      setIsVisible(scrollHeight <= stickyHeaderHeight);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyHeaderHeight]);

  return ( // Ensure you're using the return statement for JSX
    <>
      <Nav /> {/* Assuming Nav is your NavBar */}
      <div>
      <div className="navBar">
     <div className={`static-header ${isVisible ? 'visible' : ''}`}>
         {/* <div className='logoin' >
       <img src={logoimg} alt="logo" />
       </div> */}
         <div className='images' >
           <img src={logoes} alt="logo" />
         </div>
         <nav>

           <ul>

             <li>

               <Link to="/about">About Us</Link>
             </li>
             <li>
               <Link to="/contact-us">Contact Us</Link>
             </li>
             <li>
               <Link to="/our-startups">Our Startups</Link>
             </li>
             <li>
               <Link to="/faq">FAQ</Link>
             </li>
           </ul>
         </nav>
       </div>



       <div className={`sticky-header  ${isSticky ? 'visible' : ''}`}>
         <div className='logoin' >
           <img src={logoimg} alt="logo" />
         </div>
         <nav>
           <ul>

             <li>
               <Link to="/about-us">About Us</Link>
            </li>
            <li>
            <Link to="/contact-us">Contact Us</Link>
             </li>
             <li>
              <Link to="/our-startups">Our Startups</Link>
             </li>
            <li>
               <Link to="/faq">FAQ</Link>
             </li>
           </ul>
         </nav>
     </div>
     </div>
     <div className='diva'>
     <div className='maps'>
      <h1>Get in Touch</h1>
      <h4>Address:</h4>
      <p>SOAIR Hub, <br />Sam Ethan Nigeria Air Base <br />Ikeja Lagos. Nigeria.</p>
     </div>
    
     <div className='mapper'>
      
        <MapContainer center={[soairHubLocation.lat, soairHubLocation.lng]} zoom={15} style={{ height: '100vh', width: '100wh' }}>

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[soairHubLocation.lat, soairHubLocation.lng]}>
            <Popup>
              SOAIR Hub, Sam Ethan Air Base, Ikeja, Lagos, Nigeria.
            </Popup>
          </Marker>
        </MapContainer>
        </div>
        <div className='hub'>
          <h6>Would you like to reach out to us directly?</h6>
          <p>Phone: 08065089535 <br />
        Email: hello@nuturetechhub.com
</p>
        </div>
        <div className="map-contain">
        <form className="map-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <div className="send">
        <button type="submit">Send</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
