import Switch from "./Routes/Switch"

import { useState } from "react"
import { LoginContext } from "./Contexts/Loginctx";

function App() {

  const [login, setLogin] = useState("");
  const [userToken, setUserToken] = useState("invalidtoken");
  

  return (
      <LoginContext.Provider value={{login, setLogin, userToken, setUserToken}}>
      <Switch></Switch>
      </LoginContext.Provider>
  )
}

export default App
