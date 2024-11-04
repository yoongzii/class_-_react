//TexComp1.js

import { useContext } from "react";
import TextContext from './TextContext'

export default function TexComp2(){
   const value = useContext(TextContext);
      return (
         <>
            <p style={{color:'red'}}>{value}</p>
         </>
      )
}