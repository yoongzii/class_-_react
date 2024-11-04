//Ex3.js

import { UserProvider } from './ex3/UserContext'
import MainComp from './ex3/MainComp'


export default function Ex3 () {
   return (
      <>
         <UserProvider>
            <MainComp />
            
         </UserProvider>
      </>
   )
}