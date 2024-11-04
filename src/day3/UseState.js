//UseState.js

import { useState } from "react"

export default function UseState() {
   return(
      <>
         <hr />
         <Modal />
         <hr />
         <Tabs />
         <hr />
         <Ex1 />
         <hr />
         <Ex2 />

      </>
   )
}
// 조건부 렌더링 main.js
function Modal() {
   const [isShow, setIsShow] =useState(false)
   return(
      <>
         {/* {(isShow === false) ? (
            <button>Modal Toggle</button>
         ) : (
            <li>ssssss</li>
         )} */}

         {/* {!isShow && <p>name 변수의 값은 React입니다.</p>} */}

         <h2>Modal</h2>
         <p>처음 모달이 안보이고, toggle 버튼을 클릭하면 보였다 안보였다 반복
            <br /> close 버튼을 클릭하면 모달 숨김</p>
         <button onClick={()=>{setIsShow(!isShow)}}>Modal Toggle</button>

         {!isShow && (
            <div className="modal_content">
               Modal Content
            <button onClick={()=> setIsShow(!isShow)}>close</button>
            </div>)
            }

      </>
   )
}
function Tabs() {
   const [tab, setTab] = useState('tab2')
   return(

      <>
      <h2>Tab Content</h2>
      <p>Tab1/2/3 클릭하면, Content - 1/2/3 만 보임</p>
      <p>content 박스마다 다른 배경색을 적용</p>
      <div className="tabs">
         <button onClick={()=>{setTab('tab1')}}>Tab1</button>
         <button onClick={()=>{setTab('tab2')}}>Tab2</button>
         <button onClick={()=>{setTab('tab3')}}>Tab3</button>
      </div>

      <div className="tab_contents">
         {tab ==='tab1' && <div className="tab_cont" style={{background : 'gold'}}> Content - 1</div>}
         {tab ==='tab2' && <div className="tab_cont" style={{background : 'pink'}}>Content - 2</div>}
         {tab ==='tab3' && <div className="tab_cont" style={{background : 'blue'}}>Content - 3</div>}
      </div>
      </>
   )
}
function Ex1() {
   // const testItems = [] : 계속 초기화
   const [testItems, setTestItems] = useState([])
   const addItem = () => {setTestItems([...testItems, `item- ${testItems.length + 1}`])}


   const fruit = ['Apple', 'Mango', 'Banana', 'Kiwi', 'Cherry']
   const [fruits, setFruits] = useState([])

   const fruitsAdd = () => {setFruits([...fruits, `${fruits.length + 1}. ${fruit[fruits.length]}`])}

   const [userName, setUserName] = useState([])
   const [inputName, setInputName] = useState([])
   const nameAdd = () => {setUserName([...userName, inputName])}
   const handleEnter = (e) => {
      if(e.key === 'Enter'){
         setUserName([...userName, inputName])
      }
   }
   return(
      <>
         <h2>배열데이터로 리스트 만들기</h2>
         <button onClick={addItem}>Add Item</button>

         <ul>
            {testItems.map((item, index) => <li key={index}>{item}</li>)}
         </ul>

         <hr />

         <button onClick={fruitsAdd}>과일추가</button>
         <ul>
            {fruits.map((item, index) => <li key={index}>{item}</li>)}
         </ul>


         <hr />
         <input type="text"
            onChange= {(e) => setInputName(e.target.value)}
            onKeyDown={handleEnter}
         />
         <button onClick={nameAdd}>확인</button>
         <ul>
            {userName.map((item, index) => <li key= {index}>{item}</li>)}
         </ul>
      </>
   )
}


function Ex2 (){
   const [checked, setChecked] = useState(false)
   const [user, setUser] = useState({name : '익명', age : '0'})
   // const [member, setMember] = useState({mname : '익명', mage : '0', mgender :'no'})
   const [member, setMember] = useState({})


   const inputName = (e) => setUser({
      // name: e.target.value,
      ...user, name: e.target.value,
   })

   const inputAge = (e) => setUser({...user, age: e.target.value})


   // const handleInfo = e => {
   //    const {name, value} = e.target
   //    setMember({...member, [e.target.name] : e.target.value})
   // }
   const handleInfo = e => {
      const {name, value} = e.target
      setMember({...member, [name] : value})
    }

   return(
      <>
         <h3>객체 타입 useState</h3>
         이름 : <input type="text" onChange = {inputName}/>
         <br />
         나이 : <input type="number" onChange = {inputAge}/>
         <br />

         <p>이름 : {user.name} 님!</p>
         <p>나이 : {user.age} 살</p>

         <hr />
         <h4>Member</h4>
         이름 : <input type="text" name="mname" onChange={handleInfo}/>
         나이 : <input type="number" name="mage" onChange={handleInfo}/>
         성별 :
               <select name="mgender" onChange={handleInfo}>
                  <option value="여성">여성</option>
                  <option value="남성">남성</option>
               </select>

         {member.mname && <p>이름 : {member.mname} 님! </p>}
         {member.mage && <p>나이 : {member.mage} 세 </p>}
         {member.mgender && <p>성별 : {member.mgender}  </p>}

         <p>이름 : {member.mname} 님! 나이 :{member.mage}세,  성별: {member.mgender} 입니다.</p>



         <hr />
         <h3>checkBox Test</h3>
         <input type="checkbox" checked= {checked} onChange={ () => setChecked(!checked)}/>동의
         <p> {checked ? '동의함' : '동의 안함'} </p>
      </>
   )
}