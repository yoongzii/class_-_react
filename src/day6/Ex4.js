//Ex4.js
import { useEffect, useState } from 'react'
import ToggleBox from './ToggleBox';

export default function Ex4(){
   const [text, setText] =useState('')
   const [num, setNum] =useState(0);
   const [toggleShow, setToggleShow] = useState(false)

   useEffect(() => {
      console.log('num 증가');
      }, [num])

   return (
      <>
         <input type="text" onChange={e => setText(e.target.value)} />
         <button onClick={() =>  setNum(num + 1)}>Num +</button>


         <h3>토글 박스</h3>
            <button onClick={()=> setToggleShow(!toggleShow) }>
               {toggleShow !== true ? 'Show': 'Hide'} Box
            </button>

         {toggleShow === true && <ToggleBox num={num}/> }
      </>
   )
}

