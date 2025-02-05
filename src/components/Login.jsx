import { useForm } from "react-hook-form";
import "./Login.css";
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
        <div className="form-div">
            <h1 id="form-header">Sign In</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                
                <input autoFocus className="register-form-input" placeholder="Email or phone number" type="email" {...register("email", {required:{value:true, message:"*This field cannot be left blank"}})}/>
                {errors.email && <p className="error">{errors.email.message}</p>}
                <input className="register-form-input" placeholder="Password" type="password" {...register("password", {required: true, minLength:{value:7, message:"*Password must contain at least 8 characters"}})}/>
                {errors.password && <p className="error">{errors.password.message}</p>}
                <input disabled={errors.password} className="register-form-submit" type="submit" value="Sign In"/>
            </form>
        </div>
    )
}