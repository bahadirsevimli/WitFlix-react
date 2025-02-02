import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Allmovies from './components/Allmovies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Movie from './components/Movie';
import moviesData from "./assets/data/movies.json";
import User from './components/User';
import AllSeries from './components/AllSeries';

function App() {


  const [movies, setMovies] = useState(moviesData);
  const [searchText, setSearcText] = useState("");

  function searchProp(x){
    setSearcText(x);
  }

  return (
    <div className="inclusive">
      <Router>
      <Header setFunction={searchProp} />
      <Routes>
        <Route
        path="/"
        element={
          <>
          <Main />
          <Section/>
          </>
        }
       />
       <Route
       path='/allmovies'
       element={<Allmovies searchItem={searchText}/>}
       />
        <Route
       path='/allseries'
       element={<AllSeries searchItem={searchText}/>}
       />
       <Route
       path='/moviedetail'
       element={<Movie/>}
       />
       <Route path="/movie/:id" element={<Movie movies={movies} />} />
       <Route
       path='/user'
       element={<User/>}
       />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
