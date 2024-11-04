//Ex2.js
import { useState } from 'react'
// import ParentComp from './ParentComp'
import { RiAddCircleFill } from '@remixicon/react'

export default function Ex2(){
   const [items, setItems] = useState([
      {id:1, name: '마우스', price: 5000, stock: 5},
      {id:2, name: '키보드', price: 30000, stock: 10}
   ]);

   const addItem = (name, price, stock) => {//추가item
      const newProduct = {
         id: items.length + 1,
         name: name,
         price: parseInt(price),
         stock: parseInt(stock)
      }
      setItems([...items, newProduct])
   }

   return (
      <div>
         <h2>제품 관리</h2>
         <ProductMain items={items} addItem={addItem}/>
      </div>
   )
}

//***컴포넌트 추가***
const ProductMain = (props) => {
   const {items, addItem} = props;
   const [showAdd, setShowAdd] = useState(false)
   return(
      <div style={{border:'1px solid red', padding: '20px'}}>
         <ProductList items={items} />
         {/* <ProductAdd items={items} addItem={addItem}/> */}
         <button onClick={() => setShowAdd(!showAdd)} className='btn_add'
         style={{background:'none', border:'none'}}>
            <RiAddCircleFill />
         </button>

         {showAdd && <ProductAdd items={items} addItem={addItem} setShowAdd={setShowAdd}/>}
         {/* {showAdd === true && <ProductAdd items={items} addItem={addItem}/>} */}
      </div>
   )
}

const ProductList = (props) => {
   const {items} = props;
   return(
      <div style={{background: '#ddd', margin: '40px'}}>
         <h3>제품 리스트</h3>
         <ul>
            {/* <ProductItem /> */}
            {items.map(item => (
               <ProductItem  key={item.id} item={item}/>
               //<ProductItem key={item.id}> {item.id}.{item.name} </ProductItem>
            ))}
         </ul>
      </div>
   )
}

const ProductAdd = (props) => {
   const {addItem, setShowAdd} = props;
   const [inputName, setInputName] = useState()
   const [inputPrice, setInputPrice] = useState()
   const [inputStock, setInputStock] = useState()
   const handleAddItem = (e) => {
      e.preventDefault();
      addItem(inputName,inputPrice,inputStock); //조상 addItem으로 보내기
      setShowAdd(false)
   }
   return(
      <div className='prod_add_wrap'>
         <h3>제품 등록하기</h3>

         <form className='prod_add_box' onSubmit={handleAddItem}>
            <dl>
               <dt>제품명</dt>
               <dd>
                  <input
                     type="text"
                     onChange={e => setInputName(e.target.value)}
                     placeholder='등록 할 제품명을 입력하세요'
                  />
               </dd>
               <dt>가격</dt>
               <dd><input
               type="number" step={100}
               onChange={e => setInputPrice(e.target.value)}
               placeholder='가격을 입력하세요'
               />
               </dd>
               <dt>입고량</dt>
               <dd>
                  <input
                  type="number"
                  onChange={e => setInputStock(e.target.value)}
                  placeholder='입고량을 입력하세요'
               />
               </dd>
               <button type='submit'>등록</button>
            </dl>
         </form>



         {/* <input
         type="text"
         // onChange={e => setAddName(e.target.value)}
         placeholder='등록 할 제품명을 입력하세요'
         />
         <button onClick={handleAddItem}>등록</button> */}
      </div>
   )
}

//제품 리스트의 li
const ProductItem = (props) =>{
   // const {children} = props;
   const {item} = props;
   return(
      <li style={{background: '#eaa', margin: '10px'}}>
         {/* {children} */}
         {item.id}.{item.name} ({item.price}원)
      </li>
   )
}