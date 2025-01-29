import './Main.css';
import Background from '../assets/images/Matrix.jpg';
export default function Main() {
  return (
    <main className="main" style={{ backgroundImage: `url(${Background})` }}>
      <div className="hero-content">
        <h1>MATRİX</h1>
        <div className="movie-info">
          <div className="user-ratings">
            <span className="user-rating">
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: '#ff0000' }}
              ></i>
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: '#ff0000' }}
              ></i>
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: '#ff0000' }}
              ></i>
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: '#ff0000' }}
              ></i>
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: '#ff0000' }}
              ></i>
            </span>
            <span className="imdb-rating">
              <p>8.7 IMDB</p>
            </span>
          </div>
          <span className="maturity-rating">
            <p>16+</p>
          </span>
          <span className="duration">
            <p>2h 21m</p>
          </span>
        </div>
        <p>
          Step into a world where reality is an illusion and the truth is
          stranger than fiction. Are you ready to take the red pill?
        </p>
        <ul className="movie-details">
          <li>
            <p>
              <span className="movie-details-header">Starring:</span> Keanu
              Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving and Joe
              Pantoliano
            </p>
          </li>
          <li>
            <p>
              <span className="movie-details-header">Genre:</span> Action,
              Science Fiction
            </p>
          </li>
          <li>
            <p>
              <span className="movie-details-header">Tags:</span> Cyberpunk,
              Simulation, Dystopia, Philosophy{' '}
            </p>
          </li>
        </ul>
        <button className="button" style={{ verticalAlign: 'middle' }}>
          <span>Play Now </span>
        </button>
      </div>
    </main>
  );
}
