//Login.js
import { Link } from 'react-router-dom'

export default function Login () {
   return (
      <div>
         {/* Login페이지에서는 Nav가 보이지 않도록 (Nav.js에 연결하지 않아서 안보임)*/}

         <h2>Login</h2>
         {/* <Link to='/'>Home</Link> -> footer 안으로 넣어보기 */}

         {/* <footer style={{display:'flex',justifyContent:'space-between', background : '#999',color: '#fff', padding:'20px 60px'}}>
            <p>footer</p>
            <Link to='/'>Home</Link>
         </footer> 
         
         => LayoutB로 공통으로 묶어줌
         */}

      </div>
   )
}