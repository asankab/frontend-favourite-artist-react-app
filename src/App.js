import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../src/store/index';
import { Navigate } from 'react-router-dom';

import Header from './components/UI/Layout/Header';
import Navbar from './components/UI/Layout/Navbar';
import Albums from './components/presentation/Pages/Albums/Albums';
import AlbumDetails from './components/presentation/Pages/Albums/AlbumDetails';
import NotFound from './components/UI/Common/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <div className="Content">
          <Routes>
            <Route exact path="/" element={<Navigate to="albums" />} />
            <Route exact path="/albums" element={<Albums />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
            <Route path="*" component={NotFound} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
