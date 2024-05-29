import '../Style/Login.css'
import loginicon from '/gram.png'
import facebookicon from '/facebook.png'
import googleicon from '/google.png'
import emailicon from '/email.png'
import { useState, useContext } from 'react'
import { LoginContext } from '../Contexts/Loginctx'
import { apiConsummer } from '../Services/Consumer'
import { islogged, USER_TOKEN_KEY } from '../Components/logged'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [disableButton, setdisableButton] = useState(false)

    const { email, setEmail } = useContext(LoginContext);
    const { userToken, setUserToken } = useContext(LoginContext);



    const getEmailForm = (e) => {
        setEmail(e.target.value);
    }

    const getPasswordForm = (e) => {
        setPassword(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setdisableButton(true);
        apiConsummer.post("login/auth", { email, password })
            .then((response) => {
                setUserToken(response.data.token);
                localStorage.setItem(USER_TOKEN_KEY, response.data.token);
                navigate("/feed")
            })
            .catch((error) => {
                setdisableButton(false);
                alert("Usuário não encontrado!");
            })


    }

    return (


        <div className="main-div-login-signup">

            <div className='login-icon-div'>
                <img className='login-icon' src={loginicon}></img>
            </div>
            <form>
                <input onChange={getEmailForm} name="email" type='text' placeholder='Digite o seu email' className='input-login'></input>
                <input onChange={getPasswordForm} name="senha" type='password' placeholder='Digite o sua senha' className='input-login'></input>
                <div className='forgetPassword'>
                    <a href='#'>Esqueceu sua senha? </a>
                </div>
                <button disabled={disableButton} className='input-button' onClick={submitForm}>Enviar</button>
            </form>
            <div className='icons-div'>
                <a href='#'><div className='icon-div'><img className='social-icon' src={facebookicon}></img></div></a>
                <a href='#'><div className='icon-div'><img className='social-icon' src={googleicon}></img></div></a>
                <a href='#'><div className='icon-div'><img className='social-icon' src={emailicon}></img></div></a>
            </div>
            <div className='signUp'>
                <a href='#'>Cadastre-se </a>
            </div>
        </div>
    )
}
