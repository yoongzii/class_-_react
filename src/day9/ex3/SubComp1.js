//MainComp.js
import { useContext } from 'react'
import { UserContext } from './UserContext'

export default function SubComp1 (){
   const { user } = useContext(UserContext)
   return(
      <>
         <h3>subComp1</h3>
         SubName1 : {user}
      </>
   )
}