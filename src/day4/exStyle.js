//exStyle.js


import styled from 'styled-components'

export const Section =styled.section`
width: 1500px; margin: auto;
;
`

export const H2 = styled.h2`
font-size: 40px; font-weight: 700;

`
export const Ul = styled.ul`
display: flex;
justify-content: space-between;
padding: 50px; margin: 20px 0;
height: 500px;


`
export const Li = styled.li`
position: relative;
width: 300px; height: 300px;


`
export const Img = styled.img`
background: pink;
width: 300px; height: 300px;
overflow: hidden; object-fit: cover;
border-radius: 10px;

`

export const Txtbox = styled.div`
display: flex; flex-direction: column;
align-items: flex-start;

& strong {font-size: 20px; font-weight: bold;}
& .price {font-size: 18px; color: #4d4d4d;}
& .star {font-size: 18px}

`
export const Button = styled.button`
background: none; border:none;
font-size: 25px;
cursor: pointer;
position: absolute; right: 0;top: 0;
`