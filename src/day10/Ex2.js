//Ex2.js

import { useState } from "react"
import { useDelay } from "./CustomHooks"

export default function  Ex2 (){
   const [inputValue, setInputValue] = useState('');
   const handleChange =  e => setInputValue(e.target.value);

   const delayValue = useDelay(inputValue, 200)


   return (
      <>
         <h2>Delay</h2>
         <p>[입력값 : 1초 뒤 출력]</p>
         <p>즉시 반영: {inputValue}</p>
         <p>1초 후 반영 : {delayValue}</p>
         <input type="text" onChange={handleChange}/>
      </>
   )
}