//NewsWrap.js

function NewsWrap({ items }){
   const newsStyle = {
      display : 'flex', flexDirection: 'column',
      gap: '40px', textAlign: 'left', width: '360px',
      fontSize:'18px', justifyContent:'space-between',
   }
   return(
   <ul className="news_wrap">
      {items.map((item, index)=> <li key={index} style={newsStyle}>
      <strong>{item.text}</strong>
      <p>{item.date}</p>
      </li>)}
   </ul>
   )
}

export {NewsWrap}