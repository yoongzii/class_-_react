//FruitsMain.js
import { useContext } from 'react'
import FruitsList from './FruitsList'
import { TelContext } from './FruitsContext'


export default function FruitsMain () {
   const {tel} =useContext(TelContext)

   return (
      <>
      <p>---FruitsMain---</p>
         <FruitsList/>
      <p>** 문의 전화는 {tel} 입니다</p>
      </>
   )
}