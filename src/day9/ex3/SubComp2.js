//MainComp.js
import { useContext } from 'react'
import { UserContext } from './UserContext'

export default function SubComp2 (){
   const { user } = useContext(UserContext)
   return(
      <>
         <h3>subComp2</h3>
         SubName2 : {user}
      </>
   )
}