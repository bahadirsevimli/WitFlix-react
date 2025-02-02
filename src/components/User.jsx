import { useForm } from "react-hook-form";
import "./User.css";

export default function User(){

    const { register, handleSubmit, watch, formState: {errors},} = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example"))  // watch input value by passing the name of it


    return(
        <div className="form-div">
            <h1 id="form-header">Sign In</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="register-form-input" placeholder="Email or phone number" type="email" {...register("example")}/>
                <input className="register-form-input" placeholder="Password" type="password" {...register("exampleRequired", {required: true})}/>
                {errors.exampleRequired && <span className="alert-message">*This field is required</span>}

                <input className="register-form-submit" type="submit"/>
            </form>
        </div>
    )
}