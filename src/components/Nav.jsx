import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/images/NTGreen.jpg';
import logoes from '../assets/images/NTHgreen.jpg';



const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const stickyHeaderHeight = 50;
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
      // setIsSticky (scrollPosition > 0);

      if (scrollHeight > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (scrollHeight > stickyHeaderHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

      
   
    // const handleScroll = () => {
    //   if (window.pageYOffset >= sticky) {
    //     setStickyClass('sticky');
    //   } else {
    //     setStickyClass('');
    //   }
    // };

    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);

  }, [stickyHeaderHeight]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
   }

  return (
    <div className='mon'>
   
        <div className='navbar'>
      <div className={`static-header ${isVisible ? 'visible' : ''}`}>
       
        <div className='loges' >
          <img src={logoes} alt="logo" />
        </div>
        <nav>
        <div className="hamburger" onClick={toggleMenu}>
   {isOpen ? 'X' : '☰'}
       
      </div>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <ul>

            <li>

              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li>
              <Link to="/our-startups">OUR STARTUPS</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          </div>
        </nav>
      </div>
      </div>


      <div className={`sticky-header  ${isSticky ? 'visible' : ''}`}>
        <div className='logoin' >
          <img src={logoimg} alt="logo" />
        </div>
        <nav>
          <ul>

            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            <li>
              <Link to="/our-startups">OUR STARTUPS</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>

  );
};

export default Nav;