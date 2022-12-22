import {react, useState, useEffect, createContext} from 'react'
import {Row,Container, Col, Card, Button } from 'react-bootstrap'
import { BASE_URL } from '../globals'
import axios from 'axios'
import NewWmService from '../components/NewWmService'
import { propTypes } from 'react-bootstrap/esm/Image'
import NewMenService from '../components/NewMenService'
import NewColorService from '../components/NewColorService'
import NewSpecialService from '../components/NewSpecialService'
import NewOtherService from '../components/NewOtherService'
import AvailabiltyForm from '../components/AvailabilityForm'
import { NavLink } from 'react-router-dom'



const Admin = (props) => {

    const [service, setService] = useState([])
  const [menservices, setMen] = useState([])
  const [colorservices, setColorServices] = useState([])
  const [specialservices, setSpecialServices] = useState([])
  const [otherservices, setOtherServices] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [menmodal, setMenModal] = useState(false)
  const [colormodal, SetColorModal] = useState(false)
  const [specialmodal, setSpecialModal] = useState(false)
  const [othermodal, setOtherModal] = useState(false)
  const [appointments, setAppointments] = useState([])
  const [availModalShow, setAvailModalShow] = useState(false);


  const DeletePost = async (index) => {
    const id = `${service[index].id}`
      const res = axios.delete(`${BASE_URL}/deletewmservice/${id}`)
      console.log(index)
      alert('Service Deleted ')
        window.reload()    
}

const DeleteMenPost = async (index) => {
    const id = `${menservices[index].id}`
      const res = axios.delete(`${BASE_URL}/deletemenservice/${id}`)
      console.log(index)
      
        window.reload()    
}

const DeleteColorPost = async (index) => {
    const id = `${colorservices[index].id}`
      const res = axios.delete(`${BASE_URL}/deletecolorservice/${id}`)
      console.log(index)
      
        window.reload()    
}

const DeleteSpecialPost = async (index) => {
    const id = `${colorservices[index].id}`
      const res = axios.delete(`${BASE_URL}/deletespecialservice/${id}`)
      console.log(index)
      
        window.reload()    
}

const DeleteOtherPost = async (index) => {
    const id = `${otherservices[index].id}`
      const res = axios.delete(`${BASE_URL}/deleteotherservice/${id}`)
      console.log(index)
      
        window.reload()    
}


  useEffect(() => {
      async function OtherServices() {
          const res = await axios.get(`${BASE_URL}/otherservices`)
          setOtherServices(res.data)
      }
      OtherServices()
  },[])


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

  useEffect(() => {
    async function GetAppointments() {
      const res = await axios.get(`${BASE_URL}/appointments`)
      setAppointments(res.data)
    }
    GetAppointments()
  })
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <Container fluid>
              <Button variant="primary" onClick={() => setAvailModalShow(true)}>
        Add Available Slot
      </Button>
      <AvailabiltyForm
        show={availModalShow}
        onHide={() => setAvailModalShow(false)}
      />
                <h3>Woman Services:</h3>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
        Create New Woman Service.
      </Button>
                <Row>
                    
                    
                    

      <NewWmService
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                    {service.map((woman,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{woman.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Woman Service</Card.Subtitle>
                          <Card.Text>
                           ${woman.price}.00
                          </Card.Text>
                          <Button onClick={()=>DeletePost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>

            <Container fluid>
                <h3>Men Services:</h3>
                    <Button variant="primary" onClick={() => setMenModal(true)}>
        Create New Men Service.
      </Button>
                <Row>
                    
                    
                    

      <NewMenService
        show={menmodal}
        onHide={() => setMenModal(false)}
      />
                    {menservices.map((man,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{man.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Men Service</Card.Subtitle>
                          <Card.Text>
                           ${man.price}.00
                          </Card.Text>
                          <Button onClick={()=>DeleteMenPost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>


            <Container fluid>
                <h3>HairColor & Highlights Services:</h3>
                    <Button variant="primary" onClick={() => SetColorModal(true)}>
        Create New Haircolor Service.
      </Button>
                <Row>
                    
                    
                    

      <NewColorService
        show={colormodal}
        onHide={() => SetColorModal(false)}
      />
                    {colorservices.map((color,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{color.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">HairColor and Highlights</Card.Subtitle>
                          <Card.Text>
                           ${color.price}.00
                          </Card.Text>
                          <Button onClick={()=>DeleteColorPost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>

            <Container fluid>
                <h3>Special Occasion Services:</h3>
                    <Button variant="primary" onClick={() => setSpecialModal(true)}>
        Create New Special Ocassion Service.
      </Button>
                <Row>
                    
                    
                    

      <NewSpecialService
        show={specialmodal}
        onHide={() => setSpecialModal(false)}
      />
                    {specialservices.map((color,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{color.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Special Occasion Service</Card.Subtitle>
                          <Card.Text>
                           ${color.price}.00
                          </Card.Text>
                          <Button onClick={()=>DeleteSpecialPost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>




            <Container fluid>
                <h3>Other Services:</h3>
                    <Button variant="primary" onClick={() => setOtherModal(true)}>
        Create New Other Service.
      </Button>
                <Row>
                    
                    
                    

      <NewOtherService
        show={othermodal}
        onHide={() => setOtherModal(false)}
      />
                    {otherservices.map((color,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{color.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Other Service</Card.Subtitle>
                          <Card.Text>
                           ${color.price}.00
                          </Card.Text>
                          <Button onClick={()=>DeleteOtherPost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>

            <Container fluid>
                <h3>Appointments:</h3>
                    <Button variant="primary" onClick={() => setOtherModal(true)}>
        Create New Other Service.
      </Button>
                <Row>
                    
                    
                    

      <NewOtherService
        show={othermodal}
        onHide={() => setOtherModal(false)}
      />
                    {appointments.map((color,index) => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{color.first_name} {color.last_name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{color.service}</Card.Subtitle>
                          <Card.Text>
                           Price of Service: ${color.price}
                          </Card.Text>
                          <Card.Text>
                           Date of appointment: {color.appointment_date}
                          </Card.Text>
                          <Card.Text>
                           Time of appointment: {color.appointment_time}
                          </Card.Text>
                        
                          <Card.Text>
                           Client Email: {color.email}
                          </Card.Text>
                          <Card.Text>
                           Client Phone Number: {color.phone}
                          </Card.Text>
                          <Button onClick={()=>DeleteOtherPost(index)} variant='danger'>Delete Service</Button>
                        
                        </Card.Body>
                      </Card>
                    ))}
                    
                </Row>
            </Container>



            
        </div>
    )
           
                    }
  

export default Admin; 
                    
