//Ex2.js => provider
//text 제공하는 Context 객체 생성 (TextContext)
//(TextProvider) : value = 'text 제공'
//TexComp1 컴퍼넌트를 컨슈머로
import TextProvider from "./ex2/TextProvider";

export default function Ex2 () {
   return (
      <>
         <TextProvider />
      </>
   )
}