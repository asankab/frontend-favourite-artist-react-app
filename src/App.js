import React from 'react';
import './App.css';
import Albums from './components/presentation/Albums/Albums';
import AlbumDetails from './components/presentation/Albums/AlbumDetails';
import Header from './components/UI/Layout/Header';
import Navbar from './components/UI/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/UI/NotFound';

import AlbumProvider from './store/album-provider';

function App() {
  return (
    <AlbumProvider>
      <Router>
        <>
          <Header />
          <Navbar />
          <div className="Content">
            <Routes>
              <Route exact path="/" element={<Albums />} />
              <Route path="/albums/:id" element={<AlbumDetails />} />
              <Route component={NotFound} />
            </Routes>
          </div>
        </>
      </Router>
    </AlbumProvider>
  );
}

export default App;
