//Ex1.js
import { useRef, useState } from 'react'

export default function Ex1 () {
   let n = 0; //일반 변수
   const[num, setNum] =useState(0) //state 상태 변수
   const countRef =useRef(10) //ref 객체

   const handleVar= () => {
      n++
      console.log('var : ', n);

   }
   const handleState= () => {
      setNum(num +1)
      console.log('State : ', num);
   }
   const handleRef= () => {
      countRef.current++
      console.log('Ref : ', countRef.current);
   }

   // console.log(countRef);
   //{countRef.current}
   //{current : 10}:current라는 key를 가진 객체

   return (
      <>
         <h2>useRef</h2>

         <p>countRef : {countRef.current}</p>
         <p>State-Num : {num}</p>
         {/* <button onClick= {()=>{countRef.current += 1}}>ref 증가</button>
         <button onClick= {()=>{setNum(num+1)}}>State 증가</button> */}

         <button onClick= {handleVar}>일반변수(var)</button>{/* 일반변수 */}
         <button onClick= {handleState}>State상태변수</button>
         <button onClick= {handleRef}>Ref객체</button>




      </>
   )
}