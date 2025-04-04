import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Added `Router`
import { Routes, Route } from 'react-router-dom'; // Added `Route`
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Homepage/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/details" element={<InternshipDetails />} />
        <Route path="/training" element={<InternshipTraining />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service" element={<Service />} /> */}
      </Routes>
    </>
  );
}

export default App;
