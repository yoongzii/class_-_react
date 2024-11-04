//FruitItem.js
import { useContext } from "react";
import { FruitsContext } from './FruitsContext'

export default function FruitItem() {
   const {sname, setSname} = useContext(FruitsContext)
   return (
      <>
         <p>---FruitItem---</p>
         <h3>[{sname}]</h3> 과일가게
      </>
   )
}