import "./App.css";
import ApplyForm from "./pages/ApplyForm";
import InternshipDetails from "./pages/InternshipDetails";
import InternshipTraining from "./pages/InternshipTraining";
import Footer from "./components/Footer";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <InternshipTraining />
      {/* <InternshipDetails /> */}
      {/* <ApplyForm /> */}
      <Footer/> 
    </div>
  );
}

export default App;
// ..
