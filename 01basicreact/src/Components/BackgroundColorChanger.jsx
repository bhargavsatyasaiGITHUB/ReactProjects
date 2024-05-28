import { useState } from "react";



function BackgroundColorChanger(){
    const [color,setColor]=useState("olive");

    return(
        <div style={{background:color}}>
<h1>
    Hello react world
</h1>
<div > 
    <button onClick={()=>{setColor("red")}}>Red</button>
    <button onClick={()=>{setColor("yellow")}}>Yellow</button>
    <button onClick={()=>{setColor("green")}}>Green</button>
    <button onClick={()=>{setColor("black")}}>Black</button>
</div>
        </div>
    )
}
export default BackgroundColorChanger;