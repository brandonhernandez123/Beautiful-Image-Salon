import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { CheckoutForm } from './CheckoutForm'

const PUBLIC_KEY =
  'pk_test_51KuW5MC35TcRq2xpTfsWfPCZlHEIii2TsPgGJdRPvC8iiCsH5yOelSluH0RwUnmZUQU2xPV5RRRvIgy7YloSXNSr001RCRppWe'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm
        womanName={props.serve}
        colorName={props.color}
        menName={props.men}
        otherName={props.other}
        specialName={props.special}
      />
    </Elements>
  )
}

export default Stripe
