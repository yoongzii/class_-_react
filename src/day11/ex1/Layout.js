// Layout.js

import { Outlet,Link } from 'react-router-dom'
import Nav from './Nav'

export default function Layout () {
   const headerStyle = {display : 'flex', justifyContent: 'space-between',padding: '20px 60px', margin:'0'}
   return (
      <div>
         <header style={headerStyle}>
            <h1>logo</h1>
            <Nav />
            <div>
               <Link to="/Login">Login</Link>  { }
               <Link to="/Search">Search</Link>
            </div>
         </header>
         <div style={{minHeight:'500px'}}>
            <Outlet />
         </div>
         {/* Nav 컴포넌트와 함께 보여질 공통 레이아웃을 가진 컴포넌트 설정 */}
         <footer style={{display:'flex',justifyContent:'space-between',background : '#999',color: '#fff', padding:'20px 60px'}}>
            <p>footer</p>
         </footer>
      </div>
   )
}