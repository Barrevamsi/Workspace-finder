import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavScrollExample from './home/nav';
import Home from './home/home';
import Search from './home/search';
import HomePage from './home/workspaces';
import About from './home/about';
import Contact from './home/contact';
import { SearchProvider } from './context/context'; // Assuming SearchProvider is in your context folder
import ResultsPage from './home/result';

function App() {
  return (
    <SearchProvider>
      <Router>
        <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
          <NavScrollExample />
          
          <Routes>
            <Route path="/" element={<Home />} /> 
            {/* <Route path="/workspaces" element={} /> */}
            {/* <Route path="/about" element={<About />} />  */}
            
            <Route path="/search" element={<ResultsPage />} />

          </Routes>
          {/* <Search /> */}
          <About/>
          <Contact/>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
