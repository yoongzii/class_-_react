//Header.js

import { useContext } from "react"
import { LoginContext } from "./LoginContext"
import  MainComp  from "./MainComp"

export default function Header() {
   const {isLogIn, setIsLogIn} =useContext(LoginContext)
   return (
      <header>
         <span>
            {isLogIn !== true ? <button onClick={()=> setIsLogIn('로그아웃')}>로그인
            </button> :<button onClick={()=> setIsLogIn('로그인')}>로그아웃</button> }
         </span>
         <MainComp />
         {/*
         isLogin 이 true 면 span '홍길동' - 로그아웃-'버튼'만
         false 면 로그인-'버튼'만
         */}
      </header>
   )
}