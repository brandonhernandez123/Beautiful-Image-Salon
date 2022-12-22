import {react, useState, useEffect} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'

const AvailabiltyForm = (props) => {

    const [avail, setAvail] = useState({
        available_date: "",
        available_time: ""
    })
    console.log(avail)
    const onSubmit = async () => {
        const res = await axios.post(`${BASE_URL}/slots`, avail)
    }

    const handlechangeName = (e) => {
        setAvail({...avail, available_date: e.target.value})
    }

    const handlepriceChange = (e) => {
        setAvail({...avail, available_time: e.target.value})
    }
    return(
        <div>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Availability Slot
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" required='true'  onChange={handlechangeName} name='Date' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Time</Form.Label>
    <Form.Control type="time" required='true'  onChange={handlepriceChange} name='Time'  />
  </Form.Group>
        <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default AvailabiltyForm