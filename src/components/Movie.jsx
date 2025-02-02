import "./Movie.css";
import movieData from "../assets/data/movies.json";
import { useParams } from "react-router-dom";

export default function Movie({movies}){
    const {id} = useParams();
    const movie = movies.find((m) => m.id === Number(id));
    if(!movie){
        return <h2>Movie not found !</h2>;
    }
    
    

    return(
        <div id="movie">
            <img src={`/public/assets/images/${movie.img}`}/>
            <h1>{movie.name}</h1>
            <p id="movie-detail">
            Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
            </p>
            <p id="movie-detail">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}