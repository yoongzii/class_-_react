//LoginContext

import { createContext, useState } from "react";


const LoginContext = createContext()


function LoginProvider ({children}) {
   const [isLogIn, setIsLogIn] = useState(false)
   return(
      <LoginContext.Provider value={{isLogIn, setIsLogIn}}>
         {children}
      </LoginContext.Provider>
   )
}

export {LoginContext, LoginProvider}