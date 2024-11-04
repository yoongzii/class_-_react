//Ex2.js

export default function Ex2(){

   const fruits = [
      {id:1, name: 'Apple'},
      {id:2, name: 'Mango'},
      {id:3, name: 'Banana'},
      {id:4, name: 'Kiwi'},
      {id:5, name: 'Cherry'}
]

   return(
      <>
         <h2>Ex2 : 배열데이터 → 고유번호</h2>
         <ul>
            {fruits.map(fruit => (
               <li key={fruit.id}>{fruit.id}.{fruit.name}</li>
            ))}
         </ul>

         <hr />

      </>
   )
}