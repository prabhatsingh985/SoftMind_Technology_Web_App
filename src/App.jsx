import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Added `Router`
import { Routes, Route } from 'react-router-dom'; // Added `Route`
import Homepage from './pages/Homepage';

import Navbar from './components/Navbar';

import ApplyForm from "./pages/ApplyForm";
import InternshipDetails from "./pages/InternshipDetails";
import InternshipTraining from "./pages/InternshipTraining";
import Footer from './components/Footer';
import Service from './pages/Service';
import Blogs from './pages/Blogs';
import Career from './pages/Career';
import Insight from './pages/Insight';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './helper/ScrollToTop'; // Importing ScrollToTop component

function App() {
  return (
    <>
     <ScrollToTop />
      <Navbar/>
    
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/insight" element={<Insight/>} />
        <Route path="/details/:id" element={<InternshipDetails />} />
        <Route path="/training" element={<InternshipTraining />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/career" element={<Career/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/apply-form' element={<ApplyForm/>}/>

      </Routes> 
      <Footer></Footer>
    </>
  );
}

export default App;