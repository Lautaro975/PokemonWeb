import { formValuesignup } from '../../model/form.register.model';

export const getStoredUsers = (key:string) => {
    const storedUsers = localStorage.getItem(key);

    if(typeof storedUsers == "string"){
        return JSON.parse(storedUsers)
    }else{
        return [];
    }
   
}
export const setUser = ({ name,lastname, email, password,revpassword }:formValuesignup,key:string)=>{
    let storedUsers = getStoredUsers(key);
    let user = storedUsers ?? [];
     user.push({ name,lastname, email, password,revpassword });
    localStorage.setItem(key, JSON.stringify(user))
}
