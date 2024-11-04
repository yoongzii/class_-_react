//Ex2.js
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Day2 from '../day2/Day2'
import Day3 from '../day3/Day3'
import Day4 from '../day4/Day4'
import Day5 from '../day5/Day5'

export default function Ex2 () {
   return (

      <>
         <BrowserRouter>
            <Nav />
            <Routes>
               <Route path='/' element={<home />}/>
               <Route path='/day2' element={<Day2 />}/>
               <Route path='/day3' element={<Day3 />}/>
               <Route path='/day4' element={<Day4 />}/>
               <Route path='/day5' element={<Day5 />}/>
            </Routes>
         </BrowserRouter>
      </>
   )
}

//Nav.js
function Nav() {
   return (
      <nav>
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/day2'>day2</Link></li>
            <li><Link to='/day3'>day3</Link></li>
            <li><Link to='/day3'>day4</Link></li>
            <li><Link to='/day3'>day5</Link></li>
         </ul>
      </nav>
   )
}