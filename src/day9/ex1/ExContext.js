//ExContext.js
//Context 생성

import {createContext} from 'react';

const ExContext = createContext({color : 'pink'})
// React.createContext() => React는 17 버전 부터는 생략 가능
// {color: 'gold'} => 디폴트 값


export default ExContext;