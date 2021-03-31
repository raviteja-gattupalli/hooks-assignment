import React,{useState} from 'react'


function Hooks1(){
    const [name,setName]=useState({first:"",last:""})
    

    return(
        <div>
            <input type="text" value={name.first} onChange={(e)=>{
                setName({...name,first:e.target.value})
            }} />
            <input type="text"  value={name.last} onChange={(e)=>{
                setName({...name,last:e.target.value})
            }} />

            <h2>firstname:{name.first}</h2>
            <h2>Lastname:{name.last}</h2>



        </div>




    )
}

export default Hooks1;