import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/actions'

function Addtask() {
    const [text,settext]=useState('')
    const dispatch = useDispatch()
    return (
        <div className="addTask" >
           <input value={text} onChange={(e)=>settext(e.target.value)} ></input>
           <button onClick={()=>dispatch(add({id:Math.random(), description:text, isDone:false}))} >Add Task</button>
        </div>
    )
}

export default Addtask

