import { useState } from 'react';
import logo from '../assets/images/WitFlix.png';
import user from '../assets/images/user.png';
import { Link } from "react-router-dom";

export default function Header(props) {
  const email = localStorage.getItem("email");
  const { setFunction } = props;

function changeHandler(e){
  setFunction(e.target.value.toLowerCase());
  console.log("a");
}
  return (
    <header className="py-3 px-3 w-full items-center sm:flex sm:flex-row sm:justify-between flex flex-col gap-3">
      <Link className='flex justify-center' to="/">
      <img src={logo} 
      className=
      'w-40 sm:w-[200px] sm:hover:w-[220px] sm:hover:ease-out sm:hover:duration-300'/>
      </Link> 
      <nav className='flex items-center gap-7 text-white text-sm sm:text-lg'>
          <Link data-cy="openAllMovies" to="/allmovies">
            Movies
          </Link>
          <Link to="/allseries">
            Series
          </Link>
          <Link >
            My List
          </Link>
          <Link >
            Settings
          </Link>
      </nav>
      <div className="flex justify-center items-center gap-4">

        <input  className="sm:h-9 h-7 sm:w-full w-[150px] text-white bg-black rounded-lg border-1 border-solid border-white " onChange={changeHandler} type="text" placeholder="  Search.." />

        <Link to={email ? "/user" : "/login"}>
          <img className='w-6 sm:w-12' src={user} />
        </Link>

      </div>
    </header>
  );
}
