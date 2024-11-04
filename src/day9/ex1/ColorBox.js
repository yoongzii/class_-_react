//ColorBox.js
//Consumer

import { useContext } from "react";
import ExContext from './ExContext';

export default function ColorBox () {
   const value = useContext(ExContext);

   return (
      <div style={{
         width: '300px',
         height:'200px',
         margin : 'auto',
         background: value.color
         }}>
         consumer(ColorBox)
      </div>
   )
}