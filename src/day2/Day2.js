//Day2.js
// import { Fragment } from 'react'; => 축약형 <> </>
// import Main from './day1/Main';
// import { FirstComp } from './day1/FirstComp';
// import SecondComp from './day1/SecondComp';
// import Users from './day1/Users'
import Welcome from './Welcome'
import ColoredMessage from './ColoredMessage'
import MovieLi from './MovieLi'
import { ChildText, ButtonText } from './ChildText'
import NewsComp from './NewsComp'
import List from './List'


export default function Day2(){
   return (
      <>
      <h1 style ={{color : 'blue'}}>Day2 - React 수업</h1>
      {/* <FirstComp /> */}
      {/* <SecondComp /> */}
      <hr />
      {/* <Users /> */}
      <Welcome name='Alice' age='16' />
      <Welcome name='Bob' age='38'/>
      <Welcome name='Charlie' age='45'/>

      <hr />
      <ColoredMessage color='orange' />
      <ColoredMessage color='green'/>
      <ColoredMessage color='dodgerblue'/>

      <hr />

      <h2>영화예매순위</h2>
      <ol>
         <MovieLi title ='베터랑2' gpa='6.62' rank='1' color='red'/>
         <MovieLi title ='비긴어게인' gpa='9.12' rank='2' color='blueviolet'/>
         <MovieLi title ='에이리언: 로물루스' gpa='8.74' rank='3' color='slateblue'/>
         <MovieLi title ='브레드이발소: 빵스타의 탄생' gpa='9.60' rank='4' color='hotpink'/>
      </ol>

      <hr />

      <ChildText>
         <em style={{color : 'red'}}>Children</em> Text
         <em style={{color : 'blue'}}>Children</em> Text
         <em style={{color : 'slateblue'}}>Children</em> Text
      </ChildText>

      <ButtonText label='Btn01' color ='green'><span> + </span></ButtonText>
      <ButtonText label='Btn02' color ='orange'><span> + </span></ButtonText>


      <hr />
      <List/>


      <hr />
      <NewsComp/>



   </>
   )
}