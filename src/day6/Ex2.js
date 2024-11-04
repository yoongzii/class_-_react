//Ex2.js
import { useState } from "react"
import Child from './Child'


export default function Ex2 (props){

   const [count, setCount] = useState(0)
   const handleCount = () => setCount(count + 10)

   console.log('Ex2 렌더링');

   return (
      <>
         <h3>Ex2 count :{count} </h3>
         <p style={{color: 'red'}}>{props.name}</p>
         <button onClick={handleCount}>click</button>

         <Child />
      </>

   )
}