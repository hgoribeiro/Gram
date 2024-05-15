import '../Style/Feed.css'
import { USER_TOKEN_KEY } from '../Components/logged'
import { useNavigate } from 'react-router-dom';


export const Feed = () => {

    const navigate = useNavigate();

    const logoff = () =>{
        localStorage.removeItem(USER_TOKEN_KEY);
        navigate("/");
    }

    return (
        
        <div className="main-feed-div">

            <nav className="navbar navbar-light bg-light justify-content-between">
                
            </nav>
            <button onClick={logoff}> olá</button>

        </div>

    )
}

