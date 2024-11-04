//LayoutB.js

import { Outlet, Link, useNavigate} from 'react-router-dom'


export default function LayoutB () {
   const prevPage = useNavigate();
   const homePage = useNavigate();

   return (
      <div>
         <Outlet/>

         <footer style={{display:'flex',justifyContent:'space-between',background : '#999',color: '#fff', padding:'20px 60px'}}>
            <p>footer</p>
            <div>
               <button onClick={() => prevPage(-1) }>이전 페이지</button>
               <button onClick={() => homePage('/')}>Home</button>
               {/* <Link to='/'>Home</Link> */}

               {/* <button onClick={() => homePage('/')}>Home</button>
               === <Link to='/'>Home</Link> */}

            </div>
         </footer>

      </div>
   )
}