import "./AllSeries.css";
import { useEffect, useState } from "react";
import seriesData from "../assets/data/series.json";
import Button from "./small-components/Button";
import { Link } from "react-router-dom";

export default function AllSeries(props){

    const { searchItem } = props;
    const [series, setSeries] = useState([]);
    useEffect(() => {
        setSeries(seriesData);
    }, []);

    return(
           <div className="wrapper-box">
                {series
                .filter((item) => item.name.toLowerCase().includes(searchItem) )
                .map((s) => {
                    return(
                    <div 
                    className="box"
                    key={s.id}
                    >
                        <Link to={`/serie/${s.id}`}>
                            <img src={`/public/assets/images2/${s.img}`} alt="serie" />
                       </Link>
                       
                        <p className="content-header">
                        {s.name}
                    </p>  
                    </div>)
                })}
           </div>
        )
}