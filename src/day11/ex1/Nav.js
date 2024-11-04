//Nav.js

import { Link } from 'react-router-dom'
export default function Nav() {

   return (
      <nav>
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>
               <Link to='/page'>Page</Link>
               <ul>
                  <li><Link to='/page/1'>Page-1</Link></li>
                  <li><Link to='/page/2'>Page-2</Link></li>
                  <li><Link to='/page/3'>Page-3</Link></li>
               </ul>

            </li>
         </ul>
      </nav>
   )
}