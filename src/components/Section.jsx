import "./Section.css"
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
import img6 from "../assets/images/6.webp"
import Button from "./small-components/Button"
import { Link } from "react-router-dom";

export default function Section(){


return(
    <section>
        <div className="suggestion-row-1">
                <div className="suggestion-title">
                    <h2>Popular Movies</h2>
                    <Link className="a" to="/allmovies">View All</Link>
                </div>
                <div className="suggestion-content">

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="small">
                            <Button/>
                        </div>
                    </div>

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="small">
                            <Button/>
                        </div>
                    </div>

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img3})` }}>
                         <div className="small">
                            <Button/>
                        </div>
                    </div>  
                </div>
        </div>
        <div className="suggestion-row-2">
                <div className="suggestion-title">
                    <h2>Recommended for You</h2>
                    <Link className="a" to="/allmovies">View All</Link>
                </div>
                <div className="suggestion-content">

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="small">
                            <Button/>
                        </div>
                    </div>

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img5})` }}>
                        <div className="small">
                            <Button/>
                        </div>
                    </div>

                    <div className="suggestion-item" style={{ backgroundImage: `url(${img6})` }}>
                        <div className="small">
                            <Button/>
                        </div>
                    </div>  
                </div>
        </div>
    </section>
    )
}