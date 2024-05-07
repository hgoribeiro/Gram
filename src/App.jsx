import Switch from "./Routes/Switch"

import { useState } from "react"
import { LoginContext } from "./Contexts/Loginctx";

function App() {

  const [login, setLogin] = useState("");
  

  return (
      <LoginContext.Provider value={{login, setLogin}}>
      <Switch></Switch>
      </LoginContext.Provider>
  )
}

export default App
