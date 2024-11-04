//Event.js

import { useState } from "react";

function Event() {
   const [text, setText] = useState('')
   const handleTitle = () => setText('Event')
   return(
      <>
         <h2>title :{ text }</h2>

         <h3>onClick</h3>
         <button onClick={handleTitle}> click </button>
         <hr />
         <Ex1/>
         <hr />
         <Ex2/>
         <hr />
         <Ex3/>
      </>
   )
}

export default Event;


function Ex1 (){
   const [txtVal, setTxtVal] = useState('')
   const [selected, setSelected] = useState('none')
   const handleSubmit = (e) => {
      e.preventDefault();
      alert(txtVal)
   }
   return (
      <>
         <h3>Form 이벤트</h3>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               onChange={(e) => setTxtVal(e.target.value)}
            />
            <input
               type="text"
               onChange={(e) => console.log(e.target.value)}
            />
            <button type="submit">확인</button>
            <br />
            <select name="" onChange={(event) => setSelected(event.target.value) }>
               <option value="고양이">고양이</option>
               <option value="강아지" selected>강아지</option>
               <option value="앵무새">앵무새</option>
            </select>
         </form>
         <p>input text :{txtVal}</p>
         <p>select item :{selected}</p>

      </>
   )
}

function Ex2 (){
   const [userName, setUserName] =useState('')
   const [inputName, setInputName] =useState('')
   const handleName = (n) => setUserName(inputName)
   const handleKeyEnter = (e) => {
      if(e.key === 'Enter'){
         setUserName(inputName)
      }
   }
   return(
      <>
         이름 :
         <input
            type="text"
            onChange={(n) => setInputName(n.target.value)}
            onKeyDown={handleKeyEnter}
         />
         <button onClick={handleName}>확인</button>
         {/* 이름을 입력 했을 때만 p 태그가 보이게 -> condition(true) && render element
         userName !== '' && <p>당신의 이름은 {userName}입니다.</p>

         const [userName, setUserName] =useState(null)
         userName !== null && <p>당신의 이름은 {userName}입니다.</p>
         */}
         {userName !== '' && <p>당신의 이름은 {userName}입니다.</p>}
         <br />
      </>
   )
}

function Ex3 (){
   const [bgcolor, setBgcolor] = useState('pink')
   const handleonMouseEnter =()=>{setBgcolor('slateblue')}
   const handleonMouseLeave =()=>{setBgcolor('pink')}
   const boxStyle = {
      display: 'flex', justifyContent:'center', alignItem: 'center',
      width:'400px', height:'200px',
      fontSize: '28px', color:'#fff',
      border: '1px solid #999', margin:'30px auto',
      background: bgcolor
   }
   return(
      <>
         <h3>onMouseEnter & onMouseLeave</h3>
         {/* <div style={{...boxStyle, backgroundColor : bgcolor}}> */}
         <div style={boxStyle}
         onMouseEnter={handleonMouseEnter}
         onMouseLeave={handleonMouseLeave}

         >

         </div>
          {/* 마우스 엔터 or 마우스 리브 => 텍스트 출력 */}
      </>
   )
}