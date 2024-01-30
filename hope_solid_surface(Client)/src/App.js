import './App.css';
// Import Routes from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import Commercials from './pages/solidSurfaces/Commercials';
import Residental from './pages/solidSurfaces/Residental';
import Gallery from './pages/solidSurfaces/Gallery';
import ConatctUs from './pages/ConatctUs';

function App() {
  return (

    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Our-Company" element={<OurCompany />} />
        <Route path="/SolidSurfaces/commercials" element={<Commercials />} />
        <Route path="/SolidSurfaces/residentals" element={<Residental />} />
        <Route path="/SolidSurfaces/gallery" element={<Gallery />} /> contact
        <Route path="/contact" element={<ConatctUs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

