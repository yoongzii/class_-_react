//Ex3
import { useRef, useState } from 'react'

export default function Ex3 () {
   const [search, setSearch] = useState('');
   const prevSearch = useRef('');

   const handleSearch = () => {
      // console.log(search);
      if(prevSearch.current !== search){
         //입력받은 항목을 추가하는 등의 리렌더가 되어야 되고,
         //이전에 입력한 값이 초기화가 되지 않은 상태로 저장
         //입력 받은 상태변수와 비교하기 위해 ref객체 사용
         prevSearch.current = search;
         console.log(prevSearch.current);
      }
   }

   return (
      <>

         <h2>이전 값 저장</h2>
         <input
         type="text"
         placeholder='검색어를 입력'
         onChange={e => setSearch(e.target.value)}
         />

         <button onClick={handleSearch}>검색</button>
         <h3>검색결과</h3>
      </>
   )
}