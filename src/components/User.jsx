import "./User.css";
import { useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();

    function clickHandler () {
        localStorage.removeItem("email");
        navigate("/login");
        location.reload();
    }

    return(
        <>
            <button onClick={clickHandler}>exit</button>
        </>
    )
}