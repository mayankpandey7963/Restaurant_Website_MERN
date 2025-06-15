import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Login from './Components/Login';
import Signup from './Components/Signup';

import NavScrollExample from './Components/NavScrollExample';
import ScrollToTop from './Components/ScrollToTop';
import Axios from '../Axios';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <NavScrollExample />}
      <ScrollToTop />
      <Axios />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
};

export default App;
