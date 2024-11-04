//CustomHooks.js
//Ex1 => useLoading

import { useState, useEffect } from "react"

export const useLoading = () => {
   const [load, setLoad] = useState(true);

   useEffect(()=>{
      const timer = setTimeout(()=>{
         setLoad(false)
      },2000)
      return() => {
         clearTimeout(timer)
      }
   },[])
   return load
}
//Ex2 => useDelay
export const useDelay = (value, time) => {
   const [delay, setDelay] = useState();

   useEffect(()=>{
      const timer = setTimeout(()=>{
         setDelay(value)
      },time)
      return() => {
         clearTimeout(timer)
      }
   },[value,time])
   return delay
}

//Ex3 => useOutside
//**** mousedown 사용

export const useOutside = (callback) => {
   //모달창에 있는 닫기 버튼과 같은 행동
   const clickOutSide = (e) => {
      //매개변수로 받아온 'callback'함수 호출
      callback();
   }

   useEffect(() => {
      //이벤트 등록
      document.addEventListener('mousedown', clickOutSide)
      return() => {
      document.removeEventListener('mousedown', clickOutSide)
      }
   },[])

}

// Ex4 => useWindowSize
export const useWindowSize = () => {

const [winSize, setWinSize] = useState({
   width: window.innerWidth,
   height: window.innerHeight
});

   //resize 이벤트 등록
   useEffect(() => {
      const winResize = () => {setWinSize({
         width: window.innerWidth,
         height: window.innerHeight
      })}
      window.addEventListener('resize', winResize)

      //언마운트 되었을때 이벤트 삭제 (cleanup)
      return() => {
         window.removeEventListener('resize', winResize)
      }

      },[]) //빈배열은 한번만

   return winSize
}

// Ex5 => useIsValidator()
export const useIsValidator = () => {

   const [isValid , setIsValid] = useState(false)
   const [inputText , setInputText] = useState()
   const handleText = (e) =>{
      setInputText(e.target.value);
      if (e.target.value.length >= 3) setIsValid(true)
   }

return {isValid, inputText, handleText}
}