//ListItem.js
export function ListItem1({ items }){

   // const {items} = props

   return(
      <ul>
         {/* {props.items} */}
         {/* {items.maps((arr, index)=> <li>{arr}</li>) } */}
         {items.map((item, index)=> <li key={index}>{item}</li>)}
      </ul>

   )
}
export function ListItem2({ items }){
   return(
      <ul>
         {items.map((item, index)=> <li key={index}>
            <strong>{item.name}</strong>
            <p>{item.desc}</p>
         </li>)}
      </ul>
   )
}
export function ListItem3(){
   return(
      <></>
   )
}