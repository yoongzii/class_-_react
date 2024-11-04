//MainComp.js
// import { useContext } from 'react'
// import { UserContext } from './UserContext'
import SubComp1 from './SubComp1'
import SubComp2 from './SubComp2'

export default function MainComp (){
   // const { user } = useContext(UserContext)
   return(
      <>
         {/* <p>{user}</p> */}
         <SubComp1 />
         <SubComp2 />
      </>
   )
}