//Ex1.js

export default function Ex1(){
   const fruits = ['Apple', 'Mango', 'Banana', 'Kiwi', 'Cherry']
   // const fruits = [ {id:1, name: 'Apple'},  {id:2, name: 'Mango'}, {id:3, name: 'Banana'}
   // ,{id:4, name: 'Kiwi'},{id:5, name: 'Cherry'}]

   return(
      <>
         <h2>Ex1 : 배열데이터 → 리스트</h2>
         <p> - 배열로 리스트는 삭제나 추가 등이 발생했을 때 특정 데이터를 확인하기 위해
            반복요소에 key 속성을 추가
         </p>
         <p>- 배열의 index는 고유한 값(삭제 등으로 변경될 수 있는 값)이 아니므로 권장하지 않음</p>
         <ul>
            {/* {.map((,)) => {(,)}} */}
            {fruits.map((fruit, index) => (
               <li key={index}>{index+1}.{fruit}</li>
            ))}
         </ul>

         <hr />

      </>
   )
}