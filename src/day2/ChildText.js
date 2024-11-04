//ChildText.js
// export function ChildText(){}
// export function ButtonText(){}

function ChildText(props){
   return <h3 style= {{display: 'flex', flexDirection :'column'}}>{props.children}</h3>
}
function ButtonText(props){
   const {label, children} = props
   const btnStyle = {
      background: props.color , color: '#fff',
      padding: '16px 32px',
      border:'none', borderRadius:'10px',
      fontSize: '22px', fontWeight: 700,
      cursor: 'pointer', margin: '30px 20px'
   }

   return <button style={btnStyle}>{label}{children}</button>
}

export {ChildText, ButtonText}