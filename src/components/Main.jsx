import './Main.css';
import Background from '../assets/images/bg.jpg';
import Button from './small-components/Button';
export default function Main() {
  return (
    <main className='sm:min-w-2xl sm:h-[500px] w-full h-[450px] sm:text-lg sm:leading-5 text-white text-sm leading-5'>
      <div className=" w-[60%] p-10 flex flex-col sm:gap-4">
        <h1 className='text-white'>MATRİX</h1>
        <div className="flex gap-4">
          <span className=" border-1 border-white h-7 w-12 rounded-2">
            <p className='p-1'>16+</p>
          </span>
          <span className="pt-1">
            <p>2h 21m</p>
          </span>
        </div>
        <p >
          Step into a world where reality is an illusion and the truth is
          stranger than fiction. Are you ready to take the red pill?
        </p>
        <ul className="p-0 text-xs sm:text-sm">
          <li>
            <p>
              <span className="text-red-700">Starring:</span> Keanu
              Reeves, Laurence Fishburne
            </p>
          </li>
          <li>
            <p>
              <span className="text-red-700">Genre:</span> Action,
              Science Fiction
            </p>
          </li>
          <li>
            <p>
              <span className="text-red-700">Tags:</span> Cyberpunk,
              Simulation, Dystopia, Philosophy{' '}
            </p>
          </li>
        </ul>
        <div  className="hidden sm:block">
          <Button/>
       </div>
      </div>
    </main>
  );
}
