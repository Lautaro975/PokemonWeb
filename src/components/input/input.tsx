import { UseContext } from "../../hooks/useContext"
import "./input.css"

interface props{
    Search: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({Search}:props)=>{
    const {value} = UseContext();
    return(
        <>
            <input className="input__pokemon" onChange={(e)=>{Search(e.currentTarget.value)}} required min={1} type="text" id={value} placeholder="Pikachu..."/>
        </>
    )
}
