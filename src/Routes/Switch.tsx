import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login} from "../Pages/Login"
import { Feed } from "../Pages/Feed"

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/feed' element = {<Feed/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default index