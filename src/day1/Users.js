// Users.js
function Users(){

   const userlist =[
      {
         img: './img/person1.jpg',
         name:'Jane',
         email:'jane1@naver.com'
      },
      {
         img:'./img/person2.jpg',
         name:'Tom',
         email:'tom2235@naver.com'
      },
      {
         img:'./img/person3.jpg',
         name:'rose',
         email:'flower@naver.com'
      },
   ]

   const userli = {
      display: 'flex',
      width:'500px', padding: "10px 0", margin: '10px 0',
      borderBottom: '1px solid #000',
      alignItems: 'center',
      justifyContent:'space-between'
   }

   return(
      <div className="userCon">
         <h3 className="userList">Users List</h3>

         <ul className="userWrap">
            {userlist.map((user, index)=>(
               <li key={index} style={userli}>
                  <img src={user.img} alt="" className="userImg" />

                  <div className="userInfo">
                     <p>{user.name}</p>
                     <p>{user.email}</p>
                  </div>

                  <i class="ri-heart-line"></i>
               </li>
            ))}
         </ul>
      </div>
   )
}
export default Users