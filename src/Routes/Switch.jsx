import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login} from "../Pages/Login"
import { Feed } from "../Pages/Feed"
import { PrivateRoutes } from "./PrivateRoutes"



const index = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element = {<Login/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/feedteste' element = {<Feed/>}/>
            <Route path='/feed' element = {
            <PrivateRoutes>
              <Feed/>
            </PrivateRoutes>
            
            }/>
        </Routes>
    </BrowserRouter>
  )
}

export default index