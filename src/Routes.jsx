import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HousingDetail from './pages/HousingDetail';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <div className="content">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<HousingDetail />} />
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
