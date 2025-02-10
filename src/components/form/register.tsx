import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import { formValuesignup, schema } from "../../model/form.register.model";
import {Input} from "../input/inputForm";
import { Button } from "../button/button";
import './register.css'
import { getStoredUsers, setUser } from "../../utilities/localStorage/localStorage";
import { key } from "../../model/keyStorage";
import { useState } from "react";

interface params{
    onClick:()=>void
}

export const FormReactRegister = ({onClick}:params)=>{
    const {control, handleSubmit, formState:{errors}} = useForm<formValuesignup>({
        resolver : zodResolver(schema),
        defaultValues: {
            name: "", 
            lastname: "",
            email: "",
            password: "",
            revpassword: ""
        }
    })
    const [error,setError] = useState<string>("")
    const onSubmit :SubmitHandler<formValuesignup> = (data) =>{
        
        const users = getStoredUsers(key)
        
        const user = users.find((u: formValuesignup) => u.email === data.email);
        
        if(user){
            setError("The user has just been charged");
            return;
        }
        setUser(data,key)
        onClick();
        
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="formRegister">
            <Input label="Name" name="name" control={control} error={errors.name}  type="text" autoComplete="given-name" ></Input>
            <Input name="lastname" control={control} error={errors.lastname} label="Last Name" type="text" autoComplete="Last name" ></Input>
            <Input name="email" control={control} error={errors.email} label="Email" type="email" autoComplete="email" ></Input>
            <Input name="password" control={control} error={errors.password} label="Password" type="password" autoComplete="new-password" ></Input>
            <Input name="revpassword" control={control} error={errors.revpassword} label="Password" type="password" autoComplete="current-password" ></Input>
            {error!=="" && <p>{error}</p>}
            <Button type ="submit" onHandle={()=>{}} label="Send" ></Button>
        </form>
    )

    
} 