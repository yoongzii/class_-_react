//Ex1.js
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Contact from './Contact'
// import Nav from './Nav'
import Page from './Page'
import Layout from './Layout'

import Login from './Login'
import Search from './Search'
import LayoutB from './LayoutB'

export default function Ex1 () {
   return (
      <>
         <BrowserRouter>
            {/* <Nav /> */}
            <Routes>
               <Route element={<Layout/>}>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/profile' element={<Profile />}/>
                  <Route path='/contact' element={<Contact />}/>
                  <Route path='/page/:id' element={<Page />}/> {/* :id => 동적 라우팅 */}
               </Route>

               {/* Route는 중첩 가능 */}

               <Route element={<LayoutB/>}>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/Search' element={<Search />}/>
               </Route>

            </Routes>
         </BrowserRouter>

      </>
   )
}