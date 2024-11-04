// import './css/main.css';

function Main() {
   //자바스크립트 영역
   const name  = 'React';
   const title  = '덧셈';
   const element  = <h2>{title} 출력</h2>;
   let a = 5;
   let b = 10;
   const btnStyle = {
      background: 'orange', color: '#fff',
      padding: '16px 32px',
      border:'none', borderRadius:'10px',
      fontSize: '22px', fontWeight: 700,
      cursor: 'pointer'

   };

   const {padding, fontWeight} = btnStyle;
   const fruits = ['Apple', 'Grape', 'Mango', 'Orange', 'Cherry'];
   const newsStyle = {
      display : 'flex', flexDirection: 'column',
      gap: '40px', textAlign: 'left', width: '360px',
      fontSize:'18px', justifyContent:'space-between',
   }

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

      const testFunc = () =>{
         alert ('버튼 클릭한 후 나타났나요?')
      }

   return (
      <>  {/* JSX 문법 영역 */}
         <h1>hello!!</h1>
         <h2>World ! {name}</h2>
         {element}
         <p>{a} + {b} = {a + b}</p>

         <hr />
         <h3>조건부 렌더링</h3>
         <p>jsx 문법에서는 if문을 사용하지 못함</p>
         <p>변수 a : {a > 0 ? '양수' : '음수'} </p>
         <p>변수 b: {b % 2 === 0 ? '짝수' : '홀수'} </p>

         {name === 'React' ? (
            <>
               <h2>리액트</h2>
               <p>name 변수의 값은 React입니다.</p>

            </>
         ) : (
            <>
            <h3>리액트가 아닙니다.</h3>
            <p>name 변수의 값은 '{name}'입니다.</p>
            </>
         )}

         {/* 조건값이 false이면 아무것도 하지 않음  */}
         {a > 0 && <p>변수 a는 양수입니다.</p>}
         {a < 0 && <p>변수 a는 양수입니다.</p>}

         <hr />
         <h3>인라인방식으로 스타일 적용</h3>
         <p style = {{color: 'red',fontWeight: 'bold'}}>Inline CSS style</p>

         <h3>변수로 스타일 적용</h3>
         <button style={btnStyle}>Click</button>
         <button style={{...btnStyle, margin: '0 15px'}}> Btn 2 </button>
         <button style={{padding, fontWeight}}>Btn 3</button>

         <hr />
         <h3>CSS의 아이디와 클래스 사용하기</h3>
         <p id='demo' className='underline'> id는 id로 사용, class는 class로 사용하지 못함 - className으로 사용</p>
         <p className='underline'>class 컴포넌트가 class 키워드를 사용하기 때문에 css의 class는 className으로 대체 사용</p>


         <hr />
         <h3>리스트와 키 (반복되는 데이터를 리스트 형태)</h3>
         <ul>
            {fruits.map((fruit, index) => (
               <li key={index}>{fruit}</li>
            ))}
         </ul>

         <hr />

         <h2>대방건설 뉴스 섹션</h2>
         <ul className="news_wrap">
            {newsContent.map((item, index) => (
               <li key={index} style={newsStyle}>
                  <strong style ={{fontWeight: '700', fontSize:'20px'}}>{item.text}</strong>
                  <span>{item.date}</span>
               </li>
         ))}


         </ul>

         <p style={{fontSize:'18px'}}>click 이벤트: 함수를 만들고, onClick 속성을 이용해서 함수 호출</p>
         <button style={{...btnStyle, background : 'olive', borderRadius:'15px', margin:'20px 0'}} onClick={testFunc}>경고창</button>



      </>
   )//return
}

export default Main;