import { UseContext } from "../../hooks/useContext";

interface LabelProps {
    content: string;
}

export function Label({ content }: LabelProps) {

    const { value } = UseContext();
    
    return (
        <label htmlFor={value}>{content}</label>
    );
}