import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { STRIPE_URL } from '../globals'
import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { send } from 'emailjs-com'

export const CheckoutForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()

  const [receiptemail, setEmail] = useState({
    email: '',
    name: '',
    phone: ''
  })

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Beautiful Image Salon',
    message: `${toSend.from_name} has booked a ${localStorage.getItem(
      'service'
    )} appointment`,
    reply_to: ''
  })

  //   const onSubmit = (e) => {
  //     e.preventDefault()
  //     send('service_ylvuxoa', 'template_s4uf048', toSend, 'rsJ3sB5VMF8v3IPsY')
  //       .then((response) => {
  //         console.log('SUCCESS!', response.status, response.text)
  //       })
  //       .catch((err) => {
  //         console.log('FAILED...', err)
  //       })
  //   }

  const handleChange2 = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod)
      try {
        const { id } = paymentMethod
        const response = await axios.post(`${STRIPE_URL}`, {
          amount: 5000,
          id: id,
          receipt_email: toSend.reply_to
        })

        console.log('Stripe 35 | data', response.data.success)
        if (response.data.success) {
          console.log('CheckoutForm.js 25 | payment successful!')
        }
        send('service_ylvuxoa', 'template_s4uf048', toSend, 'rsJ3sB5VMF8v3IPsY')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
          })
          .catch((err) => {
            console.log('FAILED...', err)
          })
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error)
      }
    } else {
      console.log(error.message)
    }
  }

  console.log(receiptemail)
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="Enter full name"
        value={toSend.from_name}
        onChange={handleChange2}
      />

      <input
        type="text"
        name="reply_to"
        placeholder="Your email"
        value={toSend.reply_to}
        onChange={handleChange2}
      />

      <button className="policybutton">Pay</button>
    </Form>
  )
}
