import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Excavation from './pages/Excavation';
import OutdoorLiving from './pages/OutdoorLiving';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/construction" element={<Services />} />
          <Route path="/excavation" element={<Excavation />} />
          <Route path="/outdoor-living" element={<OutdoorLiving />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;