
import { useParams } from "react-router-dom";

export default function Serie({series}){
    const {id} = useParams();
    const serie = series.find((s) => s.id === Number(id));
    if(!serie){
        return <h2>Serie not found !</h2>;
    }
    
    

    return(
        <div className="flex flex-col gap-y-[20px]">
            <img className="w-full" src={`/public/assets/images2/${serie.img}`}/>
            <h1>{serie.name}</h1>
            <p className="text-[white] text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
            </p>
            <p className="text-[white] text-lg">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}