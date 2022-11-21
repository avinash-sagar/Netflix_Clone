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
function App() {
  const [myRef, setMyRef] = useState()
  const MyRef = (data) => {
    setMyRef(data)
  }

  // useEffect(() => {
  //   window.blur()
  // }, [])
  return (
    <div className="App">
      <Navbar newRef={myRef} />
      <Router>
        <Routes>
          <Route path='/' element={<Home MyRef={MyRef} />} />
          <Route path='/movies' element={!localStorage.getItem('email') ?
            <h2 className='page_404' >Please login to enjoy movie content</h2> :
            <> <Banner />
              <Row title={"Netflix Original"} isLarge fetchURL={requests.fetchNetflixOriginal} />
              <Row title={"Trending Movies"} fetchURL={requests.fetchTrending} />
              <Row title={"Top Rated Movies"} fetchURL={requests.fetchTopRated} />
              <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
              <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
              <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
              <Row title={"Romantic Movies"} fetchURL={requests.fetchRomanceMovies} />
              <Row title={"Top Documentries"} fetchURL={requests.fetchDocumentries} /> </>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
