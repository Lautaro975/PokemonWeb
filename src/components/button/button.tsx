import "./button.css"


interface props{
    type:string
    label:string,
    onHandle:()=>void
}

export const Button = ({type,label, onHandle}:props)=>{
   return(
     <button type={type as "button" | "submit" | "reset" | undefined} onClick={onHandle} className= {`button__Properties ${label}` } >{label}</button>
   )
}