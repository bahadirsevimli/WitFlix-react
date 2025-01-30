import './Main.css';
import Background from '../assets/images/bg.jpg';
import Button from './small-components/Button';
export default function Main() {
  return (
    <main className="main">
      <div className="hero-content">
        <h1>MATRİX</h1>
        <div className="movie-info">
          <span className="maturity-rating">
            <p>16+</p>
          </span>
          <span className="duration">
            <p>2h 21m</p>
          </span>
        </div>
        <p className='title'>
          Step into a world where reality is an illusion and the truth is
          stranger than fiction. Are you ready to take the red pill?
        </p>
        <ul className="movie-details">
          <li>
            <p>
              <span className="movie-details-header">Starring:</span> Keanu
              Reeves, Laurence Fishburne
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
       <Button/>
      </div>
    </main>
  );
}
