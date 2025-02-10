import { zodResolver } from "@hookform/resolvers/zod";
import {  SubmitHandler, useForm } from "react-hook-form";
import { formValuesignin, schema } from "../../model/form.sigIn.model";
import {Input} from "../input/inputForm";
import { Button } from "../button/button";
import './sigin.css'
import { getStoredUsers } from "../../utilities/localStorage/localStorage";
import { key } from "../../model/keyStorage";
import { useState } from "react";

interface params{
    onClickSignUp:()=>void
    onClickHome:()=>void
}

export const FormReact = ({onClickSignUp,onClickHome}:params)=>{
    const {control, handleSubmit, formState:{errors}} = useForm<formValuesignin>({
        resolver : zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            revpassword: ""
        }
    })
    const [error,setError] = useState<string>("")
    const onSubmit :SubmitHandler<formValuesignin> = (data) =>{
        const users = getStoredUsers(key)
                
        const user = users.find((u: formValuesignin) => u.email === data.email && u.password===data.password && u.revpassword === data.revpassword);
                
        if(!user){
            setError("User is not registered. Please sign up first");
            return;
        }
        onClickHome();
        
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Input name="email" control={control} error={errors.email} label="Email" type="email" autoComplete="email" ></Input>
            <Input name="password" control={control} error={errors.password} label="Password" type="password" autoComplete="new-password" ></Input>
            <Input name="revpassword" control={control} error={errors.revpassword} label="Password" type="password" autoComplete="current-password" ></Input>
            {error &&  <p>{error}</p>}
            <Button type ="submit" onHandle={()=>{}} label="Send" ></Button>
            <Button type="button" onHandle={onClickSignUp} label="Sign up"></Button>
        </form>
    )

    
} 