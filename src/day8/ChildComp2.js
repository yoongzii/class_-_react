//ChildComp2.js

export default function ChildComp2({count, handleNum}) {

   const childClick = () => {
      handleNum();
   }

   return (
      <div >
         <h1 style={{color :'orange'}}>{count}</h1>
         <button
         onClick={childClick}
         style={{background: 'green', color: '#FFF',width:'150px', height: '80px', border: 'none', fontSize: '20px', borderRadius: '10px'}}>
            count +
         </button>
      </div>
   )
}