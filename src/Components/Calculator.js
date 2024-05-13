import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const Calaculator = () => {
   
    const[input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
      };
 
      const calculate =  () =>{
        try{
            setInput(eval(input).toString());
        }catch (error) {
            setInput('Error');
          }
       }

      const clear = ()=>{
         setInput('');
      }

return(
    <div className="calculator">
       <Display input={input} />
      <div className="buttons">
      <Buttons handleClick={handleClick} label="1"/>
      <Buttons handleClick={handleClick} label="2"/>
      <Buttons handleClick={handleClick} label="3"/>
      <Buttons handleClick={handleClick} label="+"/>
      <Buttons handleClick={handleClick} label="4"/>
      <Buttons handleClick={handleClick} label="5"/>
      <Buttons handleClick={handleClick} label="6"/>
      <Buttons handleClick={handleClick} label="-"/>
      <Buttons handleClick={handleClick} label="7"/>
      <Buttons handleClick={handleClick} label="8"/>
      <Buttons handleClick={handleClick} label="9"/>
      <Buttons handleClick={handleClick} label="*"/>
      <Buttons handleClick={handleClick} label="."/>
      <Buttons handleClick={handleClick} label="0"/>
      <Buttons handleClick={calculate} label="="/>
      <Buttons handleClick={handleClick} label="/"/>
      <Buttons handleClick={clear} label="C"/>
      </div>
    </div>

)}


export default Calaculator;