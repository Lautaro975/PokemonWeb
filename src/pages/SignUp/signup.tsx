import { useNavigate } from "react-router-dom";
import { FormReactRegister } from "../../components/form/register"
import "./signup.css"
export const SignUp = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/signin')
    }
    return (
        <section className="section__register">
            <div className="container__formRegister">
                <h3 className="h3">SIGN UP</h3>
                <FormReactRegister  onClick={onClick}></FormReactRegister>
            </div>
        </section>
    )
}