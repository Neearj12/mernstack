import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assuming you're using BrowserRouter
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/all" element={<Read />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
