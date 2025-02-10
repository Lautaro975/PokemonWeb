import { useNavigate } from "react-router-dom";
import { FormReact } from "../../components/form/signin"
import "./sign-in.css"
export const SignIn = () => {
    const navigate = useNavigate();
    const onSignup = () => {
        navigate('/signup')
    }
    const onClickHome = () => {
        navigate('/')
    }
    return (
        <section className="section__formInput">
            <div className="container__form">
                <h3 className="h3">SIGN IN</h3>
                <FormReact onClickSignUp={onSignup} onClickHome={onClickHome}></FormReact>
            </div>
        </section>
    )
}