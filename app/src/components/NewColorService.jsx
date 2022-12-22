import {react, useState, useEffect} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'

const NewColorService = (props) => {

    const [newservice, SetNewService] = useState({
        name: "",
        price: ""
    })
    console.log(newservice)
    const onSubmit = async () => {
        const res = await axios.post(`${BASE_URL}/newcolorservice`, newservice)
    }

    const handlechangeName = (e) => {
        SetNewService({...newservice, name: e.target.value})
    }

    const handlepriceChange = (e) => {
        SetNewService({...newservice, price: e.target.value})
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
          Create New Haircolor Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name of Service</Form.Label>
    <Form.Control type="input" required='true'  onChange={handlechangeName} name='name' />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Price of Service</Form.Label>
    <Form.Control type="input" required='true'  onChange={handlepriceChange} name='price'  />
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

export default NewColorService