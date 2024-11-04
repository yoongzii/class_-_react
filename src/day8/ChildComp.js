//ChildComp.js

export default function ChildComp(props) {
   const {count, handleParent, handleParentData} = props;

   const childClick = () => handleParentData();
   const minusCount = () => handleParent();

   return (
      <div style={{background : '#ddd',padding:'30px', margin:'30px 70px', borderRadius: '10px'}}>


         <button onClick={childClick} style={{background:'none'}}>부모의 data값 변경</button>
         <p>{handleParent}</p>


         <h1>{count}</h1>
         <button onClick={minusCount}>count - </button>
      </div>
   )
}