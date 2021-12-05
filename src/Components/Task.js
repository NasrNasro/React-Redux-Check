import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deletetask, donetask } from '../redux/actions'
import Edit from './Edit'

function Task({task,i}) {
    const dispatch = useDispatch()
    return (
        <Card style={{ width: '30%', margin: "0 15px 30px" }}>
            <Card.Header>{`Task N°${i+1}`}</Card.Header>
            <Card.Body>
                <Card.Title style={{ textDecoration: task.isDone && "line-through" }} >{task.description}</Card.Title>
                <div className="btns" >
                    <Button variant="primary" onClick={()=>dispatch(donetask(task.id))} >{task.isDone ? "undone" : "done"}</Button>
                    <Edit task={task} />
                    <Button onClick={()=>dispatch(deletetask(task.id))} >Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Task