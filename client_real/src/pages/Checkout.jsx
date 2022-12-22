import React, {useEffect, useState} from "react";
import AppointmentForm from "../components/AppointmentForm";
import { CheckoutForm } from "../Stripe/CheckoutForm";
import { BASE_URL } from "../globals";
import { Axios } from "axios";


const Checkout = () => {
    const [slots, setSlots] = useState([])

    // useEffect(() => {
    //     if (chosenService === null) {
    //       const savedService = JSON.parse(localStorage.getItem("service"));
    //       setChosenService(savedService != null ? savedService : "");
    //     }
    //     localStorage.setItem("service", JSON.stringify(chosenService.service));
    //     localStorage.setItem("price", chosenService.price)
    //   }, []);
  


    return(
        <div>
            <h1>Checkout</h1>
            <h2>Service: {localStorage.getItem("service")}</h2>
            <h3>Price: ${localStorage.getItem("price")}.00</h3>
            <AppointmentForm />
        </div>
    )
}


export default Checkout;