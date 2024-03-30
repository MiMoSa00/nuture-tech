import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from '../src/components/AboutUs';
import ContactUs from '../src/components/ContactUs';
import Layout from './components/Layout';
// import FAQPage from './FAQPage';
import  OurStartups from './components/OurStartups';
      
function App () {
  return (
  <Router>
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="/faq" element={<FAQPage />} /> */}
      <Route path="/our-startups" element={<OurStartups />} /> 
    </Routes>
    </Layout>
  </Router>
  )
}

export default App;