import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import HeroSection from './components/herosection/HeroSection';
import Profile from './pages/Profile'; // 👉 ta page de profil
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/inscription" element={<Register />} />
         <Route path="/connexion" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
