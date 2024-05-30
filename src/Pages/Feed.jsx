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
            <div className="flex ">
                <div className="min-w-80 border-r-2 border-black">
                    <img className='pl-4 h-14 w-44 my-2' src={loginicon}></img>
                </div>
                
                    <nav className="w-full" >
                        <ul className="flex flex-1 h-full max-w-7xl justify-end ">
                            <li className="text-2xl my-auto">
                                <a className="text-2xl ml-5 " href="#">Nome</a></li>
                            <li className="text-2xl my-auto ">
                                <a className="text-2xl ml-5" href="#">Perfil</a></li>
                            <li className="text-2xl my-auto">
                                <a className="text-2xl ml-5" href="#">Configurações</a></li>
                        </ul>
                    </nav >
                
            </div>
            <div className="flex max-h-full">
                <div className="w-80 border-r-2 border-t-2 border-black ">
                    AAAAAAAAAA
                </div>
                <div className="flex-1 justify-center items-center bg-orange-600 mx-auto my-0 max-w-7xl ml-0 h-screen">
                    BBBBBBBBBBB
                </div>
            </div>
        </div >

    )
}

