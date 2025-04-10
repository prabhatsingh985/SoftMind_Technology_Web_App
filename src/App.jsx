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

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/details/:id" element={<InternshipDetails />} />
        <Route path="/training" element={<InternshipTraining />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog" element={<Blogs/>} />

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;