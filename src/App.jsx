import './App.css';
import ApplyForm from './pages/ApplyForm';
import Navbar from './components/Navbar'; // Corrected import path
import InternshipDetails from './pages/InternshipDetails';
import InternshipTraining from './pages/InternshipTraining';
import Career from './pages/Career';
import Service from './pages/Service'
import { BrowserRouter as Router } from 'react-router-dom'; // Added `Router`
import { Routes, Route } from 'react-router-dom'; // Added `Route`
import Insight from './pages/Insight';
import ScalableAWSPage from './pages/Insight2';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Homepage/> */}
      {/* <Footer></Footer> */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/details" element={<InternshipDetails />} />
        <Route path="/training" element={<InternshipTraining />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
