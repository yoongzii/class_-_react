//Ex4.js
import FruitsWrapper from "./ex4/FruitsWrapper";
import { FruitsProvider } from './ex4/FruitsContext'

export default function Ex4() {
   return (
      <>

         <FruitsProvider>
            <FruitsWrapper />
         </FruitsProvider>
      </>
   )
}



//Ex4
// └ FruitsContext.js
// └ FruitsProvider
// └ FruitsWrapper.js
//    └ FruitsMain.js
//       └ FruitsList.js
//          └ FruitItem.js
//    └ FruitsHead.js