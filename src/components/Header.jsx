import { useState } from 'react';
import logo from '../assets/images/WitFlix.png';
import user from '../assets/images/user.png';
import './Header.css';
import { Link } from "react-router-dom";

export default function Header(props) {
  const { setFunction } = props;
  const [search, setSearch] = useState("");

function changeHandler(e){
  setFunction(e.target.value.toLowerCase());
  console.log("a");
}
  return (
    <header className="header">
      <Link to="/">
       <img src={logo} id="logo-img" />
      </Link>
      
      <nav id="header-nav">
          <Link to="/allmovies">
          <a className='header-a'>Movies</a>
          </Link>
          <Link >
          <a className='header-a'>Series</a>
          </Link>
          <Link >
          <a className='header-a'>My List</a>
          </Link>
          <Link >
          <a className='header-a'>Settings</a>
          </Link>
      </nav>
      <div className="search">
        <input onChange={changeHandler} type="text" placeholder="  Search.." />
        <img src={user} />
      </div>
    </header>
  );
}
