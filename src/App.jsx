// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavScrollExample from './home/nav';
// import Home from './home/home';
// import Search from './home/search';
// import HomePage from './home/workspaces';
// import About from './home/about';
// import Contact from './home/contact';
// import { SearchProvider } from './context/context'; // Assuming SearchProvider is in your context folder
// import { BookingProvider } from './context/bookingContext';
// import ResultsPage from "./home/Result"
// import WorkspaceDetails from './home/workspacedetails';
// import MyBookings from './home/bookings';


// function App() {
//   return (
//     <BookingProvider>
//     <SearchProvider>
      
//       <Router>
//         <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
//           <NavScrollExample />
          
//           <Routes>
//             <Route path="/" element={<Home />} /> 
//             <Route path="/search" element={<ResultsPage />} />
//             <Route path="/workspace/:id" element={<WorkspaceDetails />} />
//             <Route path="/my-bookings" element={<MyBookings />} />
//           </Routes>
//           {/* <Search /> */}
//           <About/>
//           <Contact/>
//         </div>
//       </Router>
      
//     </SearchProvider>
//     </BookingProvider>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavScrollExample from './home/nav';
import Home from './home/home';
import ResultsPage from './home/Result';
import WorkspaceDetails from './home/workspacedetails';
import MyBookings from './home/bookings';
import About from './home/about';
import Contact from './home/contact';
import Login from './home/login';
import Register from './home/register';
import { SearchProvider } from './context/context';
import { BookingProvider } from './context/bookingContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BookingProvider>
      <SearchProvider>
        <Router>
          <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', paddingTop: '60px' }}>
            {/* Conditional Rendering of Navbar */}
            {isAuthenticated && <NavScrollExample isAuthenticated={isAuthenticated} onLogout={handleLogout} />}

            {/* Routes */}
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              {isAuthenticated ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<ResultsPage />} />
                  <Route path="/workspace/:id" element={<WorkspaceDetails />} />
                  <Route path="/my-bookings" element={<MyBookings />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>

            {/* About and Contact Sections */}
            <div>
            {isAuthenticated && <About  isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
            {isAuthenticated && <Contact isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
            </div>
          </div>
        </Router>
      </SearchProvider>
    </BookingProvider>
  );
}

export default App;

