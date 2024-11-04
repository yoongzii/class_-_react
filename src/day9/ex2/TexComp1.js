//TexComp1.js

import { useContext } from "react";
import TextContext from './TextContext'

export default function TexComp1(){
   const value = useContext(TextContext);
      return (
         <>
            <p>{value}</p>
         </>
      )
}

