
//Ex1.js
import { useState } from "react"

export default function Ex1 (props){
   const [count, setCount] = useState(0)

   const handleIncrease = () => setCount(count + 1)
   const handleDecrease = () => setCount(count - 1)


   console.log('counter Rendering');

   return (
      <>
      <h3>Ex1 count : {count} </h3>
      <p style={{color: 'red'}}>{props.name}</p>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>

      </>

   )
}