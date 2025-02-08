
import { useNavigate } from 'react-router-dom';

export default function User() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email")

    function clickHandler () {
        localStorage.removeItem("email");
        navigate("/login");
        location.reload();
    }

    return(
        <div className='sm:w-[40%] w-[80%] bg-slate-900 rounded-2xl p-3 text-white flex flex-col gap-3 items-center'>
            <div className='rounded-md h-10 w-[80%] p-2 ms-3 text-center'> WELCOME</div>
            <div className='rounded-md h-10 w-[80%] p-2 ms-3 text-center'> {email}</div>
            <input onClick={clickHandler} className="text-white  bg-red-700 rounded-md h-10 w-[80%] p-2 ms-3" type="submit" value="Log Out"/>
        </div> 
    )
}