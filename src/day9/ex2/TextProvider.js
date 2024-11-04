//TextProvider
import TextContext from './TextContext'
import TexComp1 from './TexComp1'
import TexComp2 from './TexComp2'

export default function TextProvider(){
   const value = '컨텍스트 제공자는 Provider, 사용자는 Consumer';
   return(
      <>
         <TextContext.Provider value={value}>
         <TexComp1 />
         <TexComp2 />
         </TextContext.Provider>

      </>
   )
}
