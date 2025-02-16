
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
import img6 from "../assets/images/6.jpg"
import Button from "./small-components/Button"
import { Link } from "react-router-dom";

export default function Section(){


return(
    <section className="text-white flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-5">Popular Movies</h2>
                    <Link className="text-white" to="/allmovies">View All</Link>
                </div>
                <div className="sm:flex-row flex flex-col gap-2 justify-between">

                    <div className=" sm:m-0 sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="hidden sm:block absolute bottom-1 ">
                            <Link to="/movie/1">
                                <Button/>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="hidden sm:block absolute bottom-1">
                        <Link to="/movie/2">
                                <Button/>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img3})` }}>
                         <div className="hidden sm:block absolute bottom-1">
                         <Link to="/movie/3">
                                <Button/>
                            </Link>
                        </div>
                    </div>  
                </div>
        </div>
        <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2>Recommended for You</h2>
                    <Link className="text-white" to="/allmovies">View All</Link>
                </div>
                <div className="sm:flex-row flex flex-col gap-2 justify-between">

                    <div className="sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="hidden sm:block absolute bottom-1">
                        <Link to="/movie/4">
                                <Button/>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img5})` }}>
                        <div className="hidden sm:block absolute bottom-1">
                        <Link to="/movie/5">
                                <Button/>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:w-[31%] h-[200px] pt-[30px] pr-0 pb-[15px] pl-[5px] rounded-3 bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${img6})` }}>
                        <div className="hidden sm:block absolute bottom-1">
                        <Link to="/movie/6">
                                <Button/>
                            </Link>
                        </div>
                    </div>  
                </div>
        </div>
    </section>
    )
}