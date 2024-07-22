import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Coursedatas from './Course_data/course.jsx';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login.jsx';

// import About from './pages/About/About';
import './index.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Home/> */}
      {/* <Coursedatas/> */}
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/course" element={<Coursedatas/>} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
      
    </Router>
    
    </>

  );
}

export default App;
