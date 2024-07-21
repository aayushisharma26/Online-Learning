// import React from 'react';
// import Coursedatas from './Course_data/course.jsx';


// function App() {
//   return (
//     <>
//       <Coursedatas />
//     </>
//   )
// }

// export default App;







// import React from 'react';
// import Coursedatas from './Course_data/course.jsx';

// function App() {
//   return (
//     <>
//       <Coursedatas />

//     </>
//   )
// }

// export default App;



// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar.jsx';
// import Home from './Component/Home.jsx';


// const App = () => {
//   return (
//     <>
//     <Router>
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>

//     </Router>
//   </>
//   );
// };

// export default App;












import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Coursedatas from './Course_data/course.jsx';
// import About from './pages/About/About';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home/> */}
      {/* <Coursedatas/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/assignment" element={<Assignmet />} /> */}
        <Route path="/course" element={<Coursedatas/>} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/" element={<Home />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
