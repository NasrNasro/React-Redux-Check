import React, { useState } from 'react'
import { Modal,Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { editask } from '../redux/actions';

function Edit({task}) {
    const [edit, setEdit] = useState(`${task.description}`)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const savechanges = () => { dispatch(editask(task.id,edit)); handleClose()}
    return (
        <div>
            <>
            <Button variant="primary" onClick={handleShow}> Edit </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit this task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={edit} onChange={(e)=>setEdit(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={savechanges} >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
)
}
export default Edit