//FruitsHead.js

import { useContext } from 'react'
import { FruitsContext, TelContext } from './FruitsContext'

export default function FruitsHead () {
   const {sname, setSname} = useContext(FruitsContext)
   const {tel, setTel} = useContext(TelContext)
   return (
      <>
         <h3>{sname}</h3>
         <p>---FruitsHead---</p>
         <p>전화번호 : {tel} </p>
         <button onClick={() => setSname('우동')}>우동으로 변경</button>
      </>
   )
}