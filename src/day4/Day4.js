//Day4.js
import styled from 'styled-components'
import SectionStyle from './SectionStyle'
import {Title2, Wrapper, Text, FirstButton , SecondButton, AnimationText, Header} from './style.js'

import GlobalStyle from './GlobalStyle'

export default function Day4(){
   return(
      <>
         <GlobalStyle />
         <Header>
            <h1></h1>
            <ul id="gnb">
               <li>menu</li>
               <li>menu</li>
               <li>menu</li>
            </ul>
            <button className='allmenu'></button>

         </Header>
         <Title2>Styled Component</Title2>
         <hr />
         <AnimationText>Keyframes Animation</AnimationText>
         <hr />
         <Button label='Btn1'/>
         <Button label='Btn2'/>
         <StyledButton>styleBtn</StyledButton>
         <hr />
         <FirstButton>Primary</FirstButton>
         <SecondButton>Secondary</SecondButton>
         <hr />
         <Wrapper>
            <Title2>Wrapper</Title2>
            <h3>스타일이 적용된 컴포넌트</h3>
            <p>
               <strong>Strong</strong>
               배경:흰색, 패딩: 50px적용 </p>
         </Wrapper>
         <hr />
         <SectionStyle>SectionStyle</SectionStyle>
         <hr />
         <Text color='green' fontsize='34px' em>Hello</Text>
         <Text color='hotpink' fontsize='16px'>World</Text>

      </>
   )
}

function Button (props){
   const btnStyle = {
      background : 'green',
      color : '#fff',
      padding: '10px 20px', marginRight: '5px',
      border : 'none'
   }
   return(
      <button style={btnStyle}>{props.label}</button>
   )
}

//공통 변수
const bdrsVal = '20px';
// const boxShadow = '5px 5px 5px rgba(0,0,0,0.3)';


const StyledButton =  styled.button`
   background : orange;
   color : #fff;
   padding: 10px 20px;
   border: none;
   /* border-radius: ${bdrsVal}; */
`
