import { useState } from "react";
function Counter(props){

   let [counter,setCounter]= useState(props.initialCount)
    const name="Bhargav"
   // let counter=5;

    const addValue=()=>{
        counter++;
        setCounter(counter);
        console.log(counter);
    }
    const decValue=()=>{
        counter--;
        setCounter(counter);
        console.log(counter);
    }
    return(
        <>
        <h1>Counter is ready for {props.userName}</h1>
        <h2>Counter value is {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={decValue}>dec Value</button>
        </>
        
    )
}
export default Counter;