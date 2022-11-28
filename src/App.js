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
function App() {
  const [myRef, setMyRef] = useState()
  const MyRef = (data) => {
    setMyRef(data)
  }
  return (
    <div className="App">
      <Navbar newRef={myRef} />
      <Router>
        <Routes>
          <Route path='/' element={<Home MyRef={MyRef} />} />
          <Route path='/create-account' element={<Signup />} />
          <Route path='/movies' element={
            <> <Banner />
              <Row title={"Netflix Original"} isLarge fetchURL={requests.fetchNetflixOriginal} />
              <Row title={"Trending Movies"} fetchURL={requests.fetchTrending} />
              <Row title={"Top Rated Movies"} fetchURL={requests.fetchTopRated} />
              <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
              <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
              <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
              <Row title={"Romantic Movies"} fetchURL={requests.fetchRomanceMovies} />
              <Row title={"Top Documentries"} fetchURL={requests.fetchDocumentries} />
            </>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
