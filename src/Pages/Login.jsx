import '../Style/Login.css'
import loginicon from '/gram.png'
import facebookicon from '/facebook.png'
import googleicon from '/google.png'
import emailicon from '/email.png'
import { useState, useContext } from 'react'
import { LoginContext } from '../Contexts/Loginctx'
import { apiConsummer } from '../Services/Consumer'

export const Login = () => {

    const [password, setPassword] = useState("");
    const { login } = useContext(LoginContext);
    const { setLogin } = useContext(LoginContext);
    const [disableButton, setdisableButton] = useState(false)


    const getLoginForm = (e) => {
        setLogin(e.target.value);
    }

    const getPasswordForm = (e) => {
        setPassword(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setdisableButton(true);
        apiConsummer.post("login/auth",{login,password})
            .then((res) => {
                
                console.log(res)

            })
            .catch((res) => {
                setdisableButton(false);
                console.log(res);


            })

    }

    return (

        <div className="main-div-login-signup">
            <div className='login-icon-div'>
                <img className='login-icon' src={loginicon}></img>
            </div>
            <form>
                <input onChange={getLoginForm} name="login" type='text' placeholder='Digite o seu login' className='input-login'></input>
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
