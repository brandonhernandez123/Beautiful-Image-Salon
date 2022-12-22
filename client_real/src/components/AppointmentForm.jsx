import React,{ useState, useEffect} from 'react'
import { Col, Form, Row, Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import { BASE_URL } from '../globals'
import {ROW} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


const AppointmentForm = (props) => {
    const [slots, setSlots] = useState([])
    const [dateSelected, setDateSelected] = useState(false)
    const [timeSelected, setTimeSelected] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [scheduleAppointment, setScheduleAppointment] = useState({
        first_name: '',
        last_name: '',
        email: '',
        service: '',
        price: '',
        appointment_date: null,
        appointment_time: null
    })

    useEffect(() => {
        const getSlots = async () => {
            const res = await Axios.get(`${BASE_URL}/slots`)
            setSlots(res.data)
        }
        getSlots()
    }, [])

     useEffect(() => {
        const loadServiceAndPrice = async () => {
            const service = await localStorage.getItem('service')
            const price = await localStorage.getItem('price')
            setScheduleAppointment({
                ...scheduleAppointment,
                service: service,
                price: price
            })
        }
        loadServiceAndPrice()
    },[])

    const onSubmit = async(e) => {

        await Axios.post(`${BASE_URL}/slots`, scheduleAppointment)
        Redirect('/confirmation')
    }

  let serviceChosen = localStorage.getItem('service')
  let priceOfService = localStorage.getItem('price')

    const onChangeFirstName = (e) => {
        setScheduleAppointment({...scheduleAppointment, first_name: e.target.value})
    }
    const onChangeLastName = (e) => {
        setScheduleAppointment({...scheduleAppointment,
            last_name: e.target.value
        })
    }
    const onChangeEmail = (e) => {
        setScheduleAppointment({
            ...scheduleAppointment, 
            email: e.target.value
        })
    }
    const onChangePhone = (e) => {
        setScheduleAppointment({...scheduleAppointment, 
            phone: e.target.value
        })
    }
    const onChangeAppointmentDate = (e) => {
        setScheduleAppointment({...scheduleAppointment, 
            appointment_date: e.target.value,
        })
        setDateSelected(true)
    }
    const onChangeAppointmentTime = (e) => {
        setScheduleAppointment({...scheduleAppointment, 
            appointment_time: e.target.value
        })
        setTimeSelected(true)
    
    }

    const onChangeIndex = (index) => {
        setSelectedIndex(index)
    }

console.log(scheduleAppointment)
console.log(selectedIndex)

 


    return(
        <div className='apptCard'>
            <Form id='apptCard' onSubmit={onSubmit}>
                {/* <input  type='text' required='true' placeholder='First Name' />
                <input type='text' required='true' placeholder='Last Name' />
                <input  type='email' required='true' placeholder='Email address' />
                <input  type='phone' required='true' placeholder='Phone Number'  /> */}
                <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control required='true' onChange={onChangeFirstName} type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required='true' onChange={onChangeLastName} type="text" placeholder="Enter last Name" />
        </Form.Group>
        
       

       
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required='true' onChange={onChangeEmail} type="email" placeholder="Enter email" />
        </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required='true' onChange={onChangePhone} type="phone" placeholder="phone" />
        </Form.Group>
    




      </Row>
    


     
                <br/>
                <br/>
                   <h2>Date Chosen: {scheduleAppointment.appointment_date == null ? "None" : scheduleAppointment.appointment_date.slice(0,10)}</h2>
                   <h2>Time Chosen: {scheduleAppointment.appointment_time == null ? "None" : scheduleAppointment.appointment_time}</h2>

                {slots.map((slot,index) =>(
                    <div>
                       <Card
          bg='dark'
     
          style={{ width: '100%', color: 'pink'}}
          className="mb-2"
          id='apptCard'
        >
          <Card.Header>Availability</Card.Header>
          <Card.Body>
            <Card.Title> Date and Time </Card.Title>
            {dateSelected == false && timeSelected == false ?  <Button
           variant= {dateSelected == true ? 'secondary' : 'info'}
           
            type='button' disabled={dateSelected == false ? false : true}    value={slot.available_date} onClick={onChangeAppointmentDate} key={slot.id}>Available Date: {slot.available_date.slice(0,10)} @ {slot.available_time}  </Button> : <Button variant='info' disabled={timeSelected == true ? true : false} onClick={onChangeAppointmentTime} value={slot.available_time} type='button'>Confirm Date & Time</Button> }
           {}
          </Card.Body>
        </Card> 
                    
                        
                    </div>
                ))}

<Card className="text-center" bg='dark' style={{color: 'pink'}}>
      <Card.Header>Appointment Details</Card.Header>
      <Card.Body>
        <Card.Title>Please make sure all your information is correct</Card.Title>
        <Card.Text>
          <h4>Name: {scheduleAppointment.first_name} {scheduleAppointment.last_name}</h4>
          <h4>Email: {scheduleAppointment.email}</h4>
          <h4>Phone Number: {scheduleAppointment.phone}</h4>
          <h4>Service: {scheduleAppointment.service} - ${scheduleAppointment.price}</h4>
        </Card.Text>
  
      </Card.Body>
 
    </Card> 
    <Button type='submit'>Schedule Appointment</Button>
            </Form>
        </div>
    )
}


export default AppointmentForm