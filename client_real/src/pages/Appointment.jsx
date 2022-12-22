import React from "react";
import Policy from "../components/Policy";
import { Button, Row, Col, Container, Card, ListGroup, Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals";
import axios from 'axios'
import Stripe from "../Stripe/StripeContainer";
import Book from "../components/Book";



const Appointment = (props) => {
    const [show, setShow] = useState(false);
 
    // const [offShow, setOffShow] = useState(false)
  

    // const handleOffClose = () => setOffShow(false);
    // const handleOffShow = () => setOffShow(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [service, setService] = useState([])
  const [menservices, setMen] = useState([])
  const [colorservices, setColorServices] = useState([])
  const [specialservices, setSpecialServices] = useState([])
  const [otherservices, setOtherServices] = useState([])

  useEffect(() => {
      async function OtherServices() {
          const res = await axios.get(`${BASE_URL}/otherservices`)
          setOtherServices(res.data)
      }
      OtherServices()
  },[])

  console.log(otherservices)

  useEffect(() => {
      async function SpecialServices(){
          const res = await axios.get(`${BASE_URL}/specialservices`)
          setSpecialServices(res.data)
      }
      SpecialServices()
  },[])

  useEffect(()=> {
      async function ColorServices(){
          const res = await axios.get(`${BASE_URL}/colorservices`)
          setColorServices(res.data)
      }
      ColorServices()
  }, [])

  useEffect(() => {
      async function MenServices() {
          const res = await axios.get(`${BASE_URL}/menservices`)
          setMen(res.data)
      }
      MenServices()
  }, [])

  useEffect(() => {
      async function WomanServices() {
          const res = await axios.get(`${BASE_URL}/womanservices`)
          setService(res.data)
      }
      WomanServices()
  }, [])



    return(
        <div className="appointment">
            <h3>Select your service below</h3>
           
      <Policy show={show} onHide={() => setShow(false)} />
      <Container fluid>
  <Row>
      
    <h2>Woman Services</h2>
    {service.map((serve, index) =>(
 <Stack direction="horizontal" gap={2}>
 <div className="bg-light border">{serve.name}</div>
 <div className="bg-light border ms-auto">${serve.price}.00</div>
 <div className="vr" />
 <div className="bg-light border"> 
 <Book service={serve.name} price={serve.price} index={index} />
</div>
      
</Stack>
    ))}
    </Row>
    <Row>
    <h2>HairColor & Highlights</h2>
      {colorservices.map((color, index) => (
         <Stack direction="horizontal" gap={2}>
         <div className="bg-light border">{color.name}</div>
         <div className="bg-light border ms-auto">${color.price}.00</div>
         <div className="vr" />
         <div className="bg-light border"><Book service={color.name} price={color.price} index={index} />
         </div>
       </Stack>  

      ))}

    </Row>
    
    <Row>
    <h2>Men Services</h2>
    {menservices.map((men, index) => (
      <Stack direction="horizontal" gap={2}>
      <div className="bg-light border">{men.name}</div>
      <div className="bg-light border ms-auto"> ${men.price}.00</div>
      <div className="vr" />
      <div className="bg-light border">
      <Book service={men.name} price={men.price} index={index} />
         </div>
    </Stack>
    ))}
    
    </Row>
  <Row>
     
      
      <h2>Special Ocasion Services</h2>
      {specialservices.map((special, index) => (
          <Stack direction="horizontal" gap={2}>
          <div className="bg-light border">{special.name}</div>
          <div className="bg-light border ms-auto">${special.price}.00</div>
          <div className="vr" />
          <div className="bg-light border">
          <Book service={special.name} price={special.price} index={index} />
              </div>

        </Stack>
      ))}
    
  </Row>
  <Row>
      
      <h2>Other Services</h2>
        {otherservices.map((other, index) => (
 <Stack direction="horizontal" gap={2}>
 <div className="bg-light border">{other.name}</div>
 <div className="bg-light border ms-auto">${other.price}.00</div>
 <div className="vr" />
 <div className="bg-light border"> 
 <Book service={other.name} price={other.price} index={index} /> </div>
</Stack>        ))}
        
  </Row>
  
</Container>

        </div>
    )
}

export default Appointment;