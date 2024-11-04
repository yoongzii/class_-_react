//MovieLi.js

export default function MovieLi(props){

   return(
      <li style={{color : props.color, fontWeight: 'bold'}}>
         <strong>{props.title}</strong>
         <span>평점 : {props.gpa}</span>
         {/* <span>{props.rank}위</span> */}

         {/* 조건부 렌더링 */}
         {props.rank <= 3 && <p>{props.rank}위</p>}
      </li>

   )
}