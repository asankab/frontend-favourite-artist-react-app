import React from 'react';
import './App.css';
import Albums from './components/Albums/Albums';
import AlbumDetails from './components/Albums/AlbumDetails';
import Header from './components/UI/Layout/Header';
import Navbar from './components/UI/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Navbar />
          <div className="Content">
            <Routes>
              <Route exact path="/" element={<Albums />} />
              <Route path="/albums/:id" element={<AlbumDetails />} />
            </Routes>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
