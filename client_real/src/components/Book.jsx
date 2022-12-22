import {react,useState, useEffect} from 'react'
import StripeContainer from '../Stripe/StripeContainer'
import { Offcanvas, Button } from 'react-bootstrap'

const Book = ({service, price, index}) => {
    const [chosenService, setChosenService] = useState({
        service: service,
        price: price
        });


        useEffect(() => {
            if (chosenService === null) {
              const savedService = JSON.parse(localStorage.getItem("service"));
              setChosenService(savedService != null ? savedService : "");
            }
            localStorage.setItem("service", JSON.stringify(chosenService.service));
            localStorage.setItem("price", chosenService.price)
          }, []);


          const setItems = () => {
            localStorage.setItem("service", JSON.stringify(chosenService.service));
            localStorage.setItem("price", chosenService.price)
            window.location.href = '/checkout'            
          }
    
    return(
        <div>
       
           <Button onClick={() => setItems(index)}>Book</Button>

        </div>
    )
}

export default Book;