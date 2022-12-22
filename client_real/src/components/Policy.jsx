import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Policy = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="policy">
             <Button className="policybutton" onClick={handleShow}>
                Policy & Hours
            </Button>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header >
                        <Modal.Title>Policies & Hours.</Modal.Title>
                            </Modal.Header>
        <Modal.Body>
            <h4>Hours</h4>
            <ul>
                <li>Sunday: 9 AM to 8 PM</li>

                <li>Monday: 10AM to 9PM</li>

            </ul>
                <h4>Salon Policy:</h4>
                <p>You must arrive at least 15 minutes before your appointment</p>
                <p>You can't bring a guest with you as space is limited.</p>
                <p>If you need to cancel an appointment, please do so at least 12 hours in advance or else you will lose your $50.00 deposit.</p>
                <p>If you are a no show, you will lose your deposit as well as you will be restricted from booking appointments with Beautiful Image Salon.</p>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="policybutton" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Policy