import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './component/Banner';
import { Home } from './component/Home/Home';
import { Navbar } from './component/Navbar/Navbar';
import { Row } from './component/MovieList';
import requests from './requests';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from "react-router-dom";
import { Signup } from './component/Signup/Signup';
import { MovieDetals } from './component/MovieDetals';
function App() {
  const ID = localStorage.getItem('id');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-account' element={<Signup />} />
          <Route path='/movies'
            element={ID ? <MovieDetals /> :
              <h1 className='page_404' >Please login or register to enjoy movie content</h1>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
