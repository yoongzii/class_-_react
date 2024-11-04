//ColoredMessage.js

export default function ColoredMessage(props){
   const contentStyle = {
      //자바스크립트 -> 객체
      fontSize : '30px', color: props.color,
   }
   return(
      <>
         <p style={contentStyle}>Text Color :
            <strong style={{fontWeight:'bold'}}>{props.color}</strong>
         </p>

         <p>Text Color :
            <strong style={contentStyle}> {props.color}</strong>
         </p>



      </>
   )
}
