//Ex1.js
import { useState } from 'react'
import { useLoading } from './CustomHooks'
export default function  Ex1() {
   const [modal, setModal] = useState(false)
   const handleModal = () => {
      setModal(!modal)
   }

   return (
      <>
         <h2>로딩중 테스트</h2>
         <button onClick={handleModal}>모달</button>
         {modal && <Modal />} {/* →  modal === true && <Modal /> 같음 */}
      </>
   )
}

function Modal (){

   //Loading 중 => Custom Hook
   const loading = useLoading()
   return(
      <div style={{
         width:'150px',
         margin:'30px auto', padding:'20px',
         background: 'darkkhaki' , borderRadius: '50px'
      }}>
         {loading ? <p>로딩중...</p> : <p>로딩완료</p>}
      </div>
   )
}