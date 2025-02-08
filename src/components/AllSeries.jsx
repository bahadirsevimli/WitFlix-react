
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
           <div className="flex w-full flex-wrap justify-between gap-y-24 gap-x-4">
                {series
                .filter((item) => item.name.toLowerCase().includes(searchItem) )
                .map((s) => {
                    return(
                    <div 
                    className="w-[365px] h-[200px] sm:basis-[30%] basis-[45%] relative"
                    key={s.id}
                    >
                        <Link to={`/serie/${s.id}`}>
                            <img className="w-full rounded-2xl h-full object-cover" src={`/public/assets/images2/${s.img}`} alt="serie" />
                       </Link>
                       
                        <p className="text-white mt-3 text-center">
                        {s.name}
                    </p>  
                    </div>)
                })}
           </div>
        )
}