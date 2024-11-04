//ParentComp.js
import { useState } from 'react'
import ChildComp from './ChildComp'
import ChildComp2 from './ChildComp2'

export default function ParentComp() {
   const [data, setData] = useState('부모의 기본 메세지')
   const [count, setCount] = useState(0)
   const handleParentData = () => {
      setData('함수는 부모에게, 버튼은 자손에게 있음')
   }

   const handleChangeData = () => {setCount(count - 1)}

   const handleNumPlus = () =>{
      setCount (count + 1)
   }
   return (
      <div>
         <h3>부모의 data : {data}</h3>
         <h2>count : {count} </h2>
         <ChildComp handleParent={handleChangeData} count={count} hadleParentData={handleParentData}/>
         {/*
            - count 상태변수 : 부모요소
            - 증가 버튼 : childComp2 컴포넌트
         */}
         <ChildComp2 handleNum = {handleNumPlus} count={count} />
      </div>
   )
}