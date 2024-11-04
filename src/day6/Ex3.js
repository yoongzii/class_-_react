//Ex3.js
import { useEffect, useState } from 'react'
export default function Ex3 (){
   const [count, setCount] = useState(0)
   const handleCount = () => setCount(count + 10)

   const [value, setValue] =useState(true)
   const handleValue = () => setValue(!value)

   const [num, setNum] = useState(3)
   const handleNum= () => setNum(num * 2)

   console.group('** useEffect_Ex3 **');
   // console.log('useEffect 렌더링');
   // *** 렌더링이 될 때 마다 실행
   //- 의존성 배열 : [] 생략
   useEffect(()=>{

      console.log('useEffect 렌더링이 될 때 마다');
   })

   //*** 컴포넌트(Ex3)가 마운트 되었을 때(화면에 나타났을 때) 한번만 실행
   // - 의존성 배열 : [] 을 사용하되, 값을 생략
   useEffect(()=>{

      console.log('useEffect 렌더링 (한번만 실행)');
   },[])

   //*** 의존성 배열의 값이 변할 때마다 렌더링
   useEffect(()=>{
      console.log(`value : ${value}`);
   },[value])

   //*** 다수의 값을 가진 의존성 배열
   useEffect(()=>{
      console.log(`value : ${value}, Num : ${num}`);
   },[value, num])

   console.groupEnd();


   return(
      <>
         {/* <h2>useEffect</h2> */}
         <h3>Ex3 count : {count}</h3>
         <button onClick={handleCount}>click</button>
         <button onClick={handleValue}>Boolean</button>
         <button onClick={handleNum}>Num</button>


      </>
   )
}