// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Header = () => {
//     return (
//         <>
//             <div className="navbar">
//                 <div className="head">
//                     <p className="logo">Logo</p>
//                 </div>
//                 <div className="col5">
//                     <Link to="/" className="k">Home</Link>
//                     <Link to="/courses" className="k">Courses</Link>
//                     <Link to="/about" className="k">About</Link>
//                     <Link to="/assessment" className="k">Assessment</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;







import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Alpha Events</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/course">Course</a>
        <a href="/assignment">Assignment</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

