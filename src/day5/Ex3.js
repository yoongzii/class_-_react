//Ex3.js

import { useRef, useState } from "react"
import { RiHeartFill, RiDeleteBinLine, RiPencilFill, RiSaveFill } from "@remixicon/react";

export default function Ex3(){

//    const fruits = [
//       {id:1, name: 'Apple'},
//       {id:2, name: 'Mango'},
//       {id:3, name: 'Banana'},
//       {id:4, name: 'Kiwi'},
//       {id:5, name: 'Cherry'}
// ]

const [fruits ,setFruits] = useState([
   {id:1, name: 'Apple'},
   {id:2, name: 'Mango'},
   {id:3, name: 'Banana'},
   {id:4, name: 'Kiwi'},
   {id:5, name: 'Cherry'}
])//li에 출력할 전체 데이터

//useRef - HOOK 요소

const inputRef = useRef(null) //ref객체 생성
const checkedStyle = {
   fontStyle : 'italic', color : '#aaa',
   textDecoration : 'line-through'
}
const [inputFruit, setInputFruit] = useState('') //사용자가 입력한 과일 이름만 텍스트 데이터
const handleAddFruit = () => {//과일 텍스트 데이터 추가
   // console.log(inputFruit);
   //함수는 자바스크립트
   if(inputFruit !== ''){
      setFruits([...fruits, {id: fruits.length+1, name: inputFruit, isEditing : false}])
   }
   setInputFruit('')// 추가하고 입력창 비워주기
   inputRef.current.focus();
   //useRef() 이용하여 참조 할 DOM요소 지정
   //inputRef 변수에 ref 객체를 저장
   //요소에 ref 속성 이용하여 변수 이름 연결
   //inputRef.current 객체에 DOM 저장
}

const handleEnter = (e) =>{ //e = event
   // if(e.key === 'Enter'){setFruits([...fruits, {id: fruits.length+1, name: inputFruit}])}
   if(e.key==='Enter') handleAddFruit()
}
const handleRemoveFruit = (id) => {
   // console.log(id);
   // 넣어주는 것 : push() =>
   // 매개변수 id에 해당하는 항목을 제외 시켜서 다시 배열을 만들어 덮어쓰기
   // 특별한 것을 찾아서 / 배열의 요소를 순회하면서 필터링된 배열로 반환: filter() 매소드 필요  ,filter(함수)
   setFruits(fruits.filter(fruit => fruit.id !== id))//제외 공식
   console.log(fruits);
   // console.log(fruits);// 데이터 삭제 확인
}

const handleChecked = (id) => {
   setFruits(fruits.map(fruit => fruit.id === id ? {...fruit, checked: !fruit.checked} : fruit))
}

const buttonStyle = {background: 'none', border :'none'}

const handleEditFruit = (id) =>{
   setFruits(fruits.map(fruit => fruit.id === id ? {...fruit, isEditing: true} : fruit))
}

const[newName, setNewName] = useState('')

const handleEditSave = id =>{
   setFruits(fruits.map(fruit =>fruit.id === id ? {...fruit, name: newName, isEditing: false} : fruit))
   setNewName('')
}

   return(
      <>
         <h2>Ex3 : 배열데이터에 항목추가 <RiHeartFill /></h2>
         <input
            ref={inputRef}
            type="text"
            value={inputFruit}
            onChange={e => setInputFruit(e.target.value)}
            onKeyDown={handleEnter}
         />

         <button onClick={handleAddFruit}>추가</button>

         <ul>
            {fruits.map(fruit => (
               <li key={fruit.id} style={fruit.checked ? checkedStyle : null}>
               <input type="checkbox" onChange={()=> handleChecked(fruit.id)} />

               {fruit.isEditing ?
               (//저장
                  <>
                  <input type="text" placeholder={fruit.name} onChange={e => setNewName(e.target.value)} />
                  <button onClick={()=>{handleEditSave(fruit.id)}}
                  style={buttonStyle}><RiSaveFill/>
               </button>
                  </>
               )
               :(
                  //수정
               <>
               <span>{fruit.id}.{fruit.name}</span>
               <button onClick={()=>{handleEditFruit(fruit.id)}} style={buttonStyle}>
                  <RiPencilFill/>
               </button>

               </>
               )}

               {/* {!fruit.checked && (
                  <button onClick={()=>{handleEditFruit(fruit.id)}}
                  style={buttonStyle}><RiPencilFill/>
                  </button>)
                } */}


               <button onClick={() => handleRemoveFruit(fruit.id)} style={buttonStyle}>
                  {/* 바뀌지 않는 fruit.id를 가져와야함 */}
                  <RiDeleteBinLine />
               </button>
               </li>
            ))}
         </ul>
         <hr />

      </>
   )
}