//style.js => js 파일
import styled, { keyframes } from 'styled-components'

export const bdrsVal = '20px';
export const boxShadow = '5px 5px 5px rgba(0,0,0,0.3)';

export const Title2 = styled.h2`
   margin: 20px 0; color : purple;
`
export const Wrapper = styled.div`
   background :#fff;
   padding : 50px; margin: auto;
   width: 500px; height: 200px;
   position: relative; overflow: hidden;
   border: 1px solid green; border-radius: ${bdrsVal};
   box-shadow: ${boxShadow};

   //자손요소 스타일링
   & h3{font-style: italic;}
   &>p{color: green;} //직접자손
   & strong {font-weight: 700;} //후손

   //3. :hover 스타일링
   &:hover {
      background: pink;
   }
   /* & :hover {
      background: #fff;
   } */

   //4. ::before 와 ::after
   &::before {
      content: '';
      position: absolute; left: 0;right: 0;top: 0;
      height: 4px;
      background: #444;
   }
   /* &::after {
      content: '';
      position: absolute; left: 0;right: 0;bottom: 0;
      height: 4px;
      background: red;
   } */

`
export const Text = styled.p`
background: #fff;
box-shadow: ${boxShadow};
padding: 10px 20px;
margin: 40px;
//컴포넌트에서 props로 값 전달 받기
color: ${(props) => props.color};
font-size: ${(props) => props.fontsize};
//props를 이용한 조건부 스타일 적용
/* text-decoration: underline; */
text-decoration: ${(props) => props.em ? 'line-through' : 'underline'};
`

export const DefaultButton = styled.button`
   padding: 10px 20px; margin: 0 10px;
   border: none; border-radius: 10px;
   font-size: 22px; font-weight: 700;
   box-sizing: border-box;
`
//DefaultButton의 기본 스타일 상속 받기
export const FirstButton = styled(DefaultButton)`
   background: teal; color: #fff;
`
export const SecondButton = styled(DefaultButton)`
   background: #fff; color: teal; border: 1px solid teal;
`

//애니메이션
//import styled, { keyframes } from 'styled-components' 추가해야함
const ani1 = keyframes`
   from{color : red;}
   to{color : blue;}
`
export const AnimationText = styled.p`
   font-size: 40px; font-weight: 900;
   padding: 40px; font-family: 'Pretendard';
   animation: ${ani1} 2s infinite forwards linear;

`

  //반응형 스타일 @media
   export const Header = styled.header`
      display: flex; justify-content: space-between;
      align-items: center;
      padding: 50px 100px;
      background: #fff;

      & h1 {
         width: 150px; height: 80px;
         background: #000;
      }

      & #gnb {display: flex; gap: 50px; align-items: center;}

      & #gnb li{
         width: 80px;height: 50px;
      }

      & .allmenu{
         /* display: none; */
         background: green;
         width: 30px; height: 30px;
      }

      @media screen and (min-width: 1280px) {
         & .allmenu {
            display: none;
         }
      }
      @media screen and (max-width: 1279px) {
         & .allmenu {display: block;}
         & #gnb{display: none;}
      }
   `