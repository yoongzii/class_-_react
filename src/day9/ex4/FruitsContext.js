//FruitsContext.js

import { createContext, useState } from "react";


//FruitsContext - Context 객체
export const FruitsContext = createContext()

export const TelContext = createContext()

//FruitsProvider - Provider 객체

export const FruitsProvider  = ({children}) => {
   const [sname, setSname] = useState('우리동네')
   const [tel, setTel] = useState('02-1234-5678')
   return(
      <>
         <FruitsContext.Provider value={{sname, setSname}}>
            <TelContext.Provider value={{tel, setTel}}>
               {children}
               </TelContext.Provider>

         </FruitsContext.Provider>

      </>
   )
}