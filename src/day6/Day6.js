//Day6.js
import { useState } from 'react'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'
import Ex4 from './Ex4'
import Ex5 from './Ex5'
// import ToggleBox from './ToggleBox'

export default function Day6 (){
   const [name, setName] =useState('')
   const handleName = () => setName('예제1')
   return (
      <>
      <h2>useEffect</h2>
      <Ex4 />
      <hr />
      <Ex5 />
      <hr />
      {/* <ToggleBox /> */}
      {/* <hr /> */}
      {/* <button onClick={handleName}>Change Name</button>
      <Ex1 name={name}/>
      <hr />
      <Ex2 name='ex2'/>
      <hr />
      <Ex3 /> */}
      </>
   )

}