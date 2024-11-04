//Ex2.js
import { useEffect, useRef, useState } from 'react'

export default function Ex2 () {
   const numRef =useRef(0)
   const [cnt, setCnt] = useState(0);
   const [count, setCount] = useState(0);
   const handleCount = () => {
      setCount(count + 1)
      // numRef.current++
   }

   useEffect(()=>{
      numRef.current++
   }, [cnt])

   return (
      <>
         <h3>Ex2 useRef</h3>
         <p>렌더링 횟수 : {numRef.current}</p>
         <p>count : {count}</p>
         <button onClick={handleCount}>count 증가</button>

      </>
   )
}