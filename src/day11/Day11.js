//Day11.js


//ex1/Ex1.js 로 옮겨짐
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Home from './ex1/Home'
// import About from './ex1/About'
// import Profile from './ex1/Profile'
// import Contact from './ex1/Contact'
// import Nav from './ex1/Nav'
import '../css/day11.css'
import Ex1 from './ex1/Ex1'
import Ex2 from './Ex2'

export default function Day11 () {
   return (
      <>
         {/* <h1>React Router(리액터 라우터)</h1> */}
         <Ex1 />
         {/* <Ex2 /> */}
         {/* ---------------------------------------- */}
         {/* <Home /> <About /> <Profile /> <Contact /> */}
         {/* 최상위 BrowserRouter */}
            {/* <BrowserRouter>
               <Nav />
               <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/profile' element={<Profile />}/>
                  <Route path='/contact' element={<Contact />}/>
               </Routes>
            </BrowserRouter> */}
         {/* ex1 폴더에 Ex1.js로 이동 */}

      </>
   )
}