// List.js
import {ListItem1,ListItem2,ListItem3} from './ListItem'

export default function List(){
   const list1 = ['item-1','item-2','item-3','item-4'] //string
   const list2 = [
      {name: 'Item1',desc: 'Description - 01'},
      {name: 'Item2',desc: 'Description - 02'},
      {name: 'Item3',desc: 'Description - 03'}
   ]

   return(
      <>
         <h2>배열(원시값) 데이터 props</h2>
         <ListItem1 items={list1}/>

         <h2>배열(객체) 데이터 props</h2>
         <ListItem2 items={list2}/>

         <ListItem3 />
      </>
   )
}