import '../Style/Login.css'
import loginicon from '/gram.png'
import facebookicon from '/facebook.png'
import googleicon from '/google.png'
import emailicon from '/email.png'
import { useState } from 'react'

export const Login = () => {

    const login ={
        login: "",
        senha:""
    }

    const[loginState, setLoginState] = useState (login);

    const getTextFormLogin = (e: { target: { name: any; value: any } }) => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value });
      }


    return (
        
        <div className="main-div-login-signup">
            <div className='login-icon-div'>
                <img className='login-icon' src={loginicon}></img>
            </div>
            <form>
                <input onChange={getTextFormLogin} name="login" type='text' placeholder='Digite o seu login' className='input-login'></input>
                <input onChange={getTextFormLogin} name="senha" type='password' placeholder='Digite o sua senha' className='input-login'></input>
                <div className='forgetPassword'>
                    <a href='#'>Esqueceu sua senha? </a>
                </div>
                <button className='input-button'>Enviar</button>
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
