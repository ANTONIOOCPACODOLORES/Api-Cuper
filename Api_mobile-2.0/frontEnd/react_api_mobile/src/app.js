// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Teachers from './Teachers';
import Students from './Students';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gestión de Control Escolar</h1>
          <nav>
            <Link to="/teachers">Teachers</Link>
            <Link to="/students">Students</Link>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
