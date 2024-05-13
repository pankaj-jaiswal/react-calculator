
const Buttons = ({handleClick, label}   ) =>{
  return(
      <div>
         <button onClick={() => handleClick(label)}>{label}</button>

      </div>
)}

export default Buttons;