import { useEffect, useState } from "react";

import movieData from "../assets/data/movies.json";
import Button from "./small-components/Button";
import { Link } from "react-router-dom";


export default function Allmovies (props){
    const { searchItem } = props;
    const [films, setFilms] = useState([]);
    useEffect(() => {
        setFilms(movieData);
    }, []);


    return(
       <div className="flex w-full flex-wrap justify-between gap-y-24 gap-x-4">
            {films
            .filter((item) => item.name.toLowerCase().includes(searchItem) )
            .map((movie) => {
                return(
                <div 
                className="w-[365px] h-[200px] sm:basis-[30%] basis-[45%] relative"
                key={movie.id}
                >
                    <Link to={`/movie/${movie.id}`}>
                        <img className="w-full rounded-2xl h-full object-cover" src={`/public/assets/images/${movie.img}`} alt="movie" />
                   </Link>
                  
                    <p className="text-white mt-3 text-center ">
                        {movie.name}
                    </p>
                </div>)
            })}
       </div>
    )
}