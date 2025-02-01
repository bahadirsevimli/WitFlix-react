import { useEffect, useState } from "react";
import "./Allmovies.css";
import movieData from "../assets/data/movies.json";
import Button from "./small-components/Button";


export default function Allmovies (props){
    const { searchItem } = props;
    const [films, setFilms] = useState([]);
    useEffect(() => {
        setFilms(movieData);
    }, []);

    console.log(films)

    return(
       <div className="wrapper-box">
            {films
            .filter((item) => item.name.toLowerCase().includes(searchItem) )
            .map((movie) => {
                return(
                <div 
                className="box"
                key={movie.id}
                >
                    <img src={`/public/assets/images/${movie.img}`} alt="movie" />
                    <div className="play-button">
                        <Button id="allMoviesButton"/>
                    </div>
                </div>)
            })}
       </div>
    )
}