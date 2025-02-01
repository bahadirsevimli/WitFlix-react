import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Allmovies from './components/Allmovies';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

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
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
