//Page.js

import { useParams } from "react-router-dom"

export default function Page() {
   const { id } = useParams(); //경로의 id
   //배열 데이터
   const posts= [
      {
         "id": 1,
         "title": "page 1 제목",
         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
         "id": 2,
         "title": "qui est esse2",
         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
         "id": 3,
         "title": "페이지3",
         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
   ]

   //경로의 id에 해당하는 posts 정보를 찾음

   const pagePost = posts.find(post => post.id == id);
   //주소창에서는 문자열이기때문에 ==으로 같다고 해야함
   return(
      <>
         <h3>Page {id} </h3>
         <p>{pagePost.title}</p>
         <p>{pagePost.body}</p>
      </>
   )
}