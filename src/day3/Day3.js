//Day3.js
//******useState()

import { useState } from 'react';
import Event from './Event';
import UseState from './UseState';

export default function Day3(){
   return(
      <>
      {/* <h2>useState()</h2> */}
      {/* <Test /> */}

      <Event />
      <UseState />
      </>
   )
}

function Test(){
   // const study = '공부중'
   // 바뀌는 값을 변수로 사용하지 못하기 때문에 useState를 사용
   // 변수로 사용하지 못하는 이유 : reRender, function, 지역변수
   //상태는 set으로 시작
   const [study, setStudy] = useState('ready');
   const [num, setNum] = useState(0)
   const [cssColor, setCssColor] =useState('#fff')
   const [theme, setTheme] =useState('light')
   // const change = function (){
   //    if (theme === 'light') {setTheme ('dark')}
   //    else {setTheme ('light')}
   // }

   // const handleStudy = () => {setStudy('수업중')}
   const handleStudy = (s) => {setStudy(s)}

   const handleTheme = () => {
      // light ↔ dark (토글)
      // if(theme === 'light') setTheme('dark')
      // else setTheme ('light')
      setTheme(theme === 'light' ? 'dark' : 'light')
   }


   const handleIncrease = () => setNum(num + 1)
   const handleDecrease = () => setNum(num - 1)

   const handleColor = (c) => setCssColor(c)



   return (
      <>
         <p>{study}</p>
         <div className = 'btns'>
            {/* <button onClick={() => setStudy('입실')}>입실</button> */}
            {/* <button onClick={() => setStudy('수업중')}>수업중</button> */}
            {/* <button onClick={handleStudy}>수업중</button> */}
            {/* <button onClick={() => setStudy('퇴실')}>퇴실</button> */}

            <button onClick={() => handleStudy('입실')}>입실</button>
            <button onClick={() => handleStudy('수업중')}>수업중</button>
            <button onClick={() => handleStudy('퇴실')}>퇴실</button>
         </div>

         <hr />
         <h3>Counter</h3>
         <p style={{fontSize:'40px', fontWeight:'700'}}>{num}</p>
         <div className = 'btns'>
            {/* <button onClick={() => setNum(num + 1)}> + 1 </button> */}
            {/* <button onClick={() => setNum(num - 1)}> - 1 </button> */}

            <button onClick={handleIncrease}> + 1 </button>
            <button onClick={handleDecrease}> - 1 </button>
         </div>

         <hr />

         {/* <div className= 'dark'> */}
         <div className= {theme}>
            <h3 style={{color: cssColor}}>스타일 관리 useState()</h3>
            <div className="btns">
               {/* <button onClick={()=> setCssColor('gold')}>글자색 gold</button>
               <button onClick={()=> setCssColor('cyan')}>글자색 cyan</button> */}
               <button onClick={()=> handleColor('gold')}>글자색 gold</button>
               <button onClick={()=> handleColor('cyan')}>글자색 cyan</button>
               {/* <button onClick={()=> setTheme(change)}>Toggle Theme</button> */}
               {/* <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button> */}
               <button onClick={handleTheme}>Toggle Theme</button>
            </div>
         </div>
      </>
   )
}