import "./Footer.css";
import social1 from "../assets/images/s1.png"
import social2 from "../assets/images/s2.png"
import social3 from "../assets/images/s3.png"
import social4 from "../assets/images/apple.png"
import social5 from "../assets/images/google.png"

export default function Footer(){
    

    return(
        <footer className="footer">
            <div className="footer-left">
                <nav className="footer-nav">
                <a>Term Of Use</a>
                <a>Privacy-Policy</a>
                <a>FAQ</a>
                <a>Watch List</a>
                </nav>
                <p className="copyright">Lorem Ipsum dummy text the printing and typesetting industry. Lorem Ipsum has been the Industry's standard dummy text ever since 1500s, when an unknow printer took a gallery of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="footer-mid">
                <p>Follow Us</p>
                <div>
                    <img className="social-logo" src={social1} alt="facebook"/>
                    <img className="social-logo" src={social2} alt="youtube"/>
                    <img className="social-logo" src={social3} alt="twitter"/>
                </div>
            </div>
            <div className="footer-right">
                <p>Apps</p>
                <div>
                    <img className="store-logo" src={social4} alt="app store logo"/>
                    <img className="store-logo" src={social5} alt="google play logo"/>
                </div>
            </div>
        </footer>
    )
}