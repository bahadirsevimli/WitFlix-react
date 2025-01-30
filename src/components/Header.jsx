import logo from '../assets/images/WitFlix.png';
import user from '../assets/images/user.png';
import './Header.css';
export default function Header() {
  return (
    <header className="header">
      <img id="logo-img" src={logo} alt="WitFlix Logo" />
      <nav id="header-nav">
        <a>Movies</a>
        <a>Series</a>
        <a>My List</a>
        <a>Settings</a>
      </nav>
      <div className="search">
        <input type="search" placeholder="  Search.." />
        <img src={user} />
      </div>
    </header>
  );
}
