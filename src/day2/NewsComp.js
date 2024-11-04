//NewsComp.js

import { NewsWrap } from './NewsWrap';
// import Welcome from './Welcome';

export default function NewsComp(){
   const newsContent = [{
      text : "2024 추석, 풍요로운 한가위 되세요!",
      date: '2024-09-12'
   },
   {
      text : "'2024 한국-이탈리아 남자배구 글로벌 슈퍼매치 수원대회' 성료!",
      date: '2024-09-10'
   },
   {
      text : "대방건설, '2024 한국-이탈리아 남자배구 글로벌 슈퍼매치 수원대회' 메인 스폰서로 참여",
      date: '2024-09-05'
   },
   {
      text : "대방건설, 2024 우수디자인(GD) 어워드 선정",
      date: '2024-09-04'
   }
   ]

   return(
      <>
         <NewsWrap items={newsContent}/>

      </>
   )

}