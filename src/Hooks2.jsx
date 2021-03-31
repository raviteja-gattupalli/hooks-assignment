import React,{useState,useEffect} from 'react'

function Hooks2(){



    const [count,setCount]=useState(0)
    const [name,setName]=useState(" ")
 useEffect(()=>{
     console.log("updating the docs")
     document.title=`you clicked ${count} times`
 },[count])
    return(
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
   <button onClick={()=>{setCount(count+1)}}>Clicked {count} times</button>
    </div>
)

}

export default Hooks2 