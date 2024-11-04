//Ex5.js
// import { useState } from 'react'
import { useIsValidator } from './CustomHooks'
export default function Ex5 (){
   const {isValid, inputText, handleText} = useIsValidator()

   return (
      <>
         <h2>유효 데이터 검사</h2>
         <p>[최소 글자수 체크 후, 최대 글자 수 포함하여 로직 업데이트]</p>

         <p>"안내 : 3글자 이상 입력하세요"</p>
         <input type="text" onChange={handleText}/> <button>클릭</button>
         {isValid ? <p>결과 : {inputText}</p> : <p> 3글자 이상 입력하세요</p>}
      </>
   )
}