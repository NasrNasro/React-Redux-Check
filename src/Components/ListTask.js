import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    const tasks = useSelector(state => state.tasks)
    const [done, setDone] = useState(false)
    const [filter, setFilter] = useState(false)
    console.log(tasks)
    return (
            <div >
                <div className="Btns" >
                <div className="FilterBtns">
                    <Button variant="info" onClick={()=>setFilter(false)} >All</Button>
                    <Button variant="info" onClick={()=>{setDone(true); setFilter(true)}} >Done</Button>
                    <Button variant="info" onClick={()=>{setDone(false); setFilter(true)}} >Undone</Button>
                </div>
                </div>
                <div  className="Card">
                    {
                    done && filter ? tasks.filter(el=>el.isDone).map((task,i) => <Task key={task.id} task={task} i={i} />) :
                    !done && filter ? tasks.filter(el=>!el.isDone).map((task,i) => <Task key={task.id} task={task} i={i} />) :
                    !filter ? tasks.map((task,i) => <Task key={task.id} task={task} i={i} />) : 
                    null}
                </div>
            </div>
    )
}

export default ListTask
