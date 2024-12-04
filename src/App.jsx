import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavScrollExample from './home/nav';
import Home from './home/home';
import Search from './home/search';
import HomePage from './home/workspaces';
import About from './home/about';
import Contact from './home/contact';
import { SearchProvider } from './context/context'; // Assuming SearchProvider is in your context folder
import { BookingProvider } from './context/bookingContext';
import ResultsPage from "./home/Result"
import WorkspaceDetails from './home/workspacedetails';
import MyBookings from './home/bookings';


function App() {
  return (
    <BookingProvider>
    <SearchProvider>
      
      <Router>
        <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
          <NavScrollExample />
          
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/search" element={<ResultsPage />} />
            <Route path="/workspace/:id" element={<WorkspaceDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Routes>
          {/* <Search /> */}
          <About/>
          <Contact/>
        </div>
      </Router>
      
    </SearchProvider>
    </BookingProvider>
  );
}

export default App;
