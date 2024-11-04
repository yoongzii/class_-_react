// Welcome.js

// ** props 직접 받기 /
// export default function Welcome(props){
//    return(
//       <>
//          <h2>Welcome~ {props.name}!!</h2>
//          <p>{props.name} is {props.age}</p>
//       </>
//    )
// }


// **구조분해 이용
// export default function Welcome({name, age}){
//    return(
//       <>
//          <h2>Welcome~ {name}!!</h2>
//          <p>{name} is {age}</p>
//       </>
//    )
// }

// **구조분해 이용(변수)
export default function Welcome(props){
   const {name, age} = props
   return(
      <>
         <h2>Welcome~ {name}!!</h2>
         <p>{name} is {age}</p>
      </>
   )
}