//ToggleBox.js
import { useEffect, useState } from 'react'

export default function ToggleBox(props){
   const [count, setCount] = useState(0)
   useEffect(()=>{
      console.log('ToggleBox Mounting');
      setCount (count + 1)
      console.log(`Mount :${count}`);
      console.log(`Props :${props.num}`);

   },[])
   return(
      <>
         <h4>Toggle Box</h4>
         <p>Mount : {count}</p>
         {/* <button onClick={()=> setCount()}>마운팅 횟수?</button> */}
      </>
   )
}