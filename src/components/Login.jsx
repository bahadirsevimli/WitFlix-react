import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export default function Login(){

    const navigate = useNavigate();

    const initial = {
        email: "",
        password: ""
    }

    const { register, handleSubmit, reset, formState: {errors},} = useForm({ defaultValues: initial, mode: "all"});

    const onSubmit = (data) => {
        console.log(data.email + data.password);
        reset();
        navigate("/");
        toast.success("Login success, welcome !");
        localStorage.setItem("email", data.email);
        location.reload();

    };


    return(
        <div className="sm:w-[40%] w-[80%] bg-slate-900 rounded-2xl p-3 text-white">
            <h1 className="pb-2">Sign In</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                
                <input autoFocus className="text-white border-1 border-white bg-slate-900 rounded-md h-10 w-[80%] p-2 ms-3 " placeholder="Email or phone number" type="email" {...register("email", {required:{value:true, message:"*This field cannot be left blank"}})}/>
                {errors.email && <p>{errors.email.message}</p>}
                <input className="text-white border-1 border-white bg-slate-900 rounded-md h-10 w-[80%] p-2 ms-3" placeholder="Password" type="password" {...register("password", {required: true, minLength:{value:7, message:"*Password must contain at least 8 characters"}})}/>
                {errors.password && <p>{errors.password.message}</p>}
                <input disabled={errors.password} className="text-white  bg-red-700 rounded-md h-10 w-[80%] p-2 ms-3" type="submit" value="Sign In"/>
            </form>
        </div>
    )
}