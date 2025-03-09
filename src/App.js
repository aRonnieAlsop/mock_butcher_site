import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ViewportWidth from './components/ViewportWidth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />       
      </Routes>
      <div>
      <ViewportWidth /> {/* viewport width display for development */}
    </div>

    </Router>
  );
}

export default App;
