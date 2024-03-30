import { Link } from "react-router-dom";
import React from "react";
import logoe from '../assets/images/NTGreen.jpg';
// import ScrollReveal from "../ScrollReveal";

function Footer() {
  return (
    <div >

      <footer className="footer--container">
        <div className="footer--link--container">
          <div className="logos">
            <img src={logoe} alt="logo" />
          </div>
          <div className="right-aligned-container">
            <div className="footer--items">
            <div className="foots">
              <ul>

                <li>

                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/our-startups">Our Startups</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
              </div>
              <div className="footer--icon">


                <li>
                  <Link

                    to="/contact-us"

                  >
                    Contact Us

                  </Link>

                  <p className="pepsi">Have questions or want to learn more about Nuture Tech Hub? Get in touch with us today! <br /> Phone: 08065089535 <br />
                  Email: hello@nuturetechhub.com <br />
                  Address:  SOAIR Hub, Sam Ethan Nigeria Air Base Ikeja Lagos.
                </p>
                </li>

                
              
               
              </div>

            </div>
            </div>
            <div className="para">
              <h1>Join Us</h1>
              
              <p>Nurture TechHub is generally open for Everyone with Technology Skills to come transform that <br /> skill into a Technology Solution. Whether you're a seasoned professional or just starting out in <br />the tech industry, we invite you to join us at Nurture TechHub. Together, let's nurture innovation <br />and build a brighter future.</p>
           
            </div>
         


          <hr className="divider" />
          {/* <p className="footer--content">Made with 💖 by Mimi</p> */}
          <div className="footer--content--container">
            
            <p className="second">Copyright &copy; 2024 Nuture Tech Hub. All rights reserved. Privacy Policy | Terms of Service</p>

          </div>


        </div>
      </footer>

    </div>
  );
}

export default Footer;