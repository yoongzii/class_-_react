//Ex4.js
import { useEffect, useRef, useState } from 'react'

export default function Ex4 () {
   const [color, setColor] = useState(null)
   const divRef = useRef('')
   const inputRef = useRef('')

   useEffect(()=>{//문서가 열리자마자 useEffect() 사용
      inputRef.current.focus()
      inputRef.current.value='';
      console.log(color);
   },[color])

   const defaulyStyle = {
      background: '#ccc', border:'1px solid #999',
      padding:'30px',margin : '20px 50px'
   }

   const changeStyle = () => {
      divRef.current.style.background = 'pink';
      divRef.current.style.color = inputRef.current.value;
      divRef.current.style.fontWeight = 'bold';
      setColor(inputRef.current.value)
   }

   return (
      <>
         <h2>HTML DOM 직접 접근</h2>
         <input ref={inputRef} type="text" placeholder='글자색을 입력하세요' />
         <p>페이지가 열리자마자 input 요소에 포커스 적용하기</p>
         <div ref={divRef} style={defaulyStyle}> 버튼을 클릭하며 배경색과 글자색 바뀜</div>
         <button onClick={changeStyle}>스타일 변경</button>
      </>
   )
}