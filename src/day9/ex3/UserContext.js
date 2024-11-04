//UserContext.js

import { createContext, useState } from "react"

//Context 객체() => 컨슈머 컴퍼넌트에 import
const UserContext =  createContext(null)

//UserProvider => 상위 컴퍼넌트에 연결
const UserProvider = ({children}) => {
   const [user, setUser] =useState('John')
   return(
      <>
         <UserContext.Provider value={{user, setUser}}>
            {children}
         </UserContext.Provider>
      </>
   )

}

export {UserContext, UserProvider};