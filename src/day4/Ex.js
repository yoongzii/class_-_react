//Ex.js

// import styled from 'styled-components'
import {Section, H2, Ul,Li, Img, Img2, Txtbox, Button} from './exStyle.js'


export default function Ex() {
   return (
      <div id ="container">
         <Section>
            <H2>기상천외한 숙소</H2>
            <Ul>
               <Li>
                  <Img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?ml=true&im_w=720" alt=""/>
                  <Txtbox>
                     <strong>한국 Sindun-myeon, Icheon-si</strong>
                     <span class="price">\106,600 / 박</span>
                     <span class="star">★ 4.84</span>
                  </Txtbox>
                  <Button>♥</Button>
               </Li>
               <Li>
               <Img src="https://a0.muscache.com/im/pictures/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.jpg?im_w=720" alt=""/>
                  <Txtbox>
                     <strong>남아프리카 Western Cape</strong>
                     <span class="price">\196,227 / 박</span>
                     <span class="star">★ 4.94</span>
                  </Txtbox>
                  <Button>♥</Button>
               </Li>
               <Li>
               <Img src="https://a0.muscache.com/im/pictures/miso/Hosting-20605023/original/0be3f493-fd2d-434e-b557-ad2c189b1543.jpeg?im_w=720" alt=""/>
                  <Txtbox>
                     <strong>뉴질랜드</strong>
                     <span class="price">\272,429 / 박</span>
                     <span class="star">★ 4.93</span>
                  </Txtbox>
                  <Button>♥</Button>
               </Li>
            </Ul>
         </Section>
         <Section>
            <H2>컬처 아이콘</H2>
            <Ul>
               <Li>
                  <Img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq" alt=""/>
                  <Txtbox>
                     <strong>프린스의 '퍼플레인 하우스'</strong>
                  </Txtbox>
                  <Button>☎</Button>
               </Li>
               <Li>
               <Img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=1440&im_q=highq" alt=""/>
                  <Txtbox>
                     <strong>거실에서 펼쳐지는 도자 캣의 단독 공연</strong>
                  </Txtbox>
                  <Button>☎</Button>
               </Li>
               <Li>
               <Img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq" alt=""/>
                  <Txtbox>
                     <strong>폴리 포켓의 콤팩트에서 보내는 하룻밤</strong>
                  </Txtbox>
                  <Button>☎</Button>
               </Li>
            </Ul>
         </Section>


      </div>
   )
}

