import Switch from "./Routes/Switch"

import { useState } from "react"
import { LoginContext } from "./Contexts/Loginctx";

function App() {

  const [email, setEmail] = useState("");
  const [userToken, setUserToken] = useState("invalidtoken");
  

  return (
      <LoginContext.Provider value={{email, setEmail, userToken, setUserToken}}>
      <Switch></Switch>
      </LoginContext.Provider>
  )
}

export default App
