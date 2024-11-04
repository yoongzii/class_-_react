//MainComp.js
import { useContext } from "react"
import { LoginContext } from "./LoginContext"

export default function MainComp () {
   const {isLogIn} =useContext(LoginContext)
   return (
      <main>
         <h2>회원 전용 게시판</h2>

      {isLogIn !== true ? <p> 고객님, 로그인이 필요합니다. </p> : <p>반갑습니다. 홍길동님 ~</p>}
         {/*
            'true'
               로그인
               <p> 반갑습니다. 홍길동님 ~ </p>
            :
            'flase'
            <p> 고객님, 로그인이 필요합니다. </p>
         */}
      </main>
   )
}