//Ex3.js

import { useRef, useState } from "react"
import { useOutside } from './CustomHooks'

export default function  Ex3 (){
   const [modal, setModal] =useState(false)
   const handleModalOpen = () => setModal(true)//열기만
   const handleModalClose = () => setModal(false)//닫기만

   useOutside(handleModalClose)

   return (
      <>
         <h2>모달창 닫기</h2>
         <p>[모달창 주변(바깥쪽) 클릭으로 닫기]</p>
         <button onClick={handleModalOpen}>모달 열기</button>
         {modal && <Modal handleClose={handleModalClose}/>}
      </>
   )
}

function Modal({handleClose}){
   const modalOutside = {
      position: 'fixed', left: 0, right:0,top:0, bottom:0,
      background :'rgba(0,0,0,.6)',
      display:'flex', justifyContent:'center',
      alignItems:'center'
   }

   const modalBox ={
      width:'300px', minHight:'200px',
      background :'#fff', padding:'30px',
      borderRadius:'10px'
   }

   return (
      // <div style={modalOutside} onClick={handlClose}>
      <div style={modalOutside}>
         <div style={modalBox}>
            <h3>모달</h3>
            <p>모달 컨텐츠</p>

            <button onClick={handleClose}>닫기</button>
         </div>

      </div>
   )
}