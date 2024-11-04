//Ex4.js
import {useWindowSize} from './CustomHooks'


export default function  Ex4 (){
   const windowSize = useWindowSize()
   const {width, height} = windowSize;

   return (
      <>
         <h2>윈도우 Resize 이벤트</h2>
         <p>width : {width}</p>
         <p>height : {height}</p>
      </>
   )
}