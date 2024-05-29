import { USER_TOKEN_KEY } from '../Components/logged'
import { useNavigate } from 'react-router-dom';
import loginicon from '/gram.png'


export const Feed = () => {

    const navigate = useNavigate();

    const logoff = () => {
        localStorage.removeItem(USER_TOKEN_KEY);
        navigate("/");
    }

    return (

        <div className=" bg-slate-200">

            <nav className="" >
                <div className="pl-1 items-center flex my-0 mx-auto max-w-7xl  text-orange-500 justify-between ">
                    <img className='h-14 w-44 my-6' src={loginicon}></img>
                    <ul className="flex h-full">
                        <li className="text-2xl  w-full h-full">
                            <a className="text-2xl ml-5 font-mono" href="#">Nome</a></li>
                        <li className="text-2xl ">
                            <a className="text-2xl ml-5 font-mono" href="#">Perfil</a></li>
                        <li className="text-2xl ">
                            <a className="text-2xl ml-5 font-mono" href="#">Configurações</a></li>
                    </ul>
                </div>

            </nav >
            <div className="flex max-h-full">
                <div className="w-80  bg-cyan-600 ">
                    AAAAAAAAAA
                </div>
                <div className="flex-1 justify-center items-center bg-orange-600 mx-auto my-0 max-w-7xl ml-0 h-screen">
                    BBBBBBBBBBB
                </div>
            </div>
        </div >

    )
}

