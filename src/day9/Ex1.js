//Ex1.js
import ExContext from './ex1/ExContext'
import ColorBox from './ex1/ColorBox'

export default function Ex1 () {
   return (
      <>
         <h2>Context API</h2>
         <p>
            props를 하나씩 전달 X /
            state를 전역(global)적 관리 /
            여러 컴포넌트에 공통으로 사용되는 데이터 관리
         </p>

         <ul>
            {/* context 생성 - ExContext.js */}
            <li>context 생성 : React.createContext()를 사용하여 context 값을 저장할 공간 생성</li>
            {/* provider 설정 - Ex1.js */}
            <li>provider 설정 : context의 값을 공급(관리)해 줄 컴포넌트, 보통 최상위 컴포넌트로 설정</li>
            {/* consumer 사용 - colorBox.js */}
            <li>consumer 사용 : useContext 훅(Hook)을 사용해서 context으로 접근</li>
         </ul>

         <ExContext.Provider value={{color: ''}}/>
         <ColorBox />


      </>
   )
}