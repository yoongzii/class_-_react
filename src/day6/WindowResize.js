//WindowResize.js
import { useEffect, useState } from 'react'

export default function WindowResize() {
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      //Resize : 반응형 디자인 할 때
      const handleResize = () => setWidth(window.innerWidth);
       //마운트 되었을 때,한번만 이벤트리스너 등록

      window.addEventListener('resize', handleResize)

      //** 언마운트 될 때, 이벤트 리스너 삭제(cleanup)
      return () =>{
         window.removeEventListener('resize', handleResize)
      }
   },[])

   return (
      <>
         <p>Window Size : {width}</p>
      </>
   )
}