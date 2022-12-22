import React from 'react';
import { Carousel, Image, Container, Row,Col, CardGroup, Card } from 'react-bootstrap';
import locationimage from '../Images/locationimage.png'
import Cinthia from '../Images/cinthia.JPEG'
import Menu from '../Images/Menu.jpeg'
import WomenServ from '../Images/womanservice.jpg'
import { Button } from 'react-bootstrap';

const Home = (props) => {
    return(
<div className='homepagetitle'>
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
    <h1 className='compname'>Beautiful Image Salon</h1>
    <h4 className='compsub'>Clothed . in Strength . and Dignity</h4>
    </div>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    

    <div className='location'>
       
   
  
    <div className='location'>
        <h1>Location</h1>
        <h1>Salon Studio</h1>
        <h2><a href='https://www.google.com/search?q=8601+W+Cross+Dr%2C+Littleton%2C+CO+80123&bih=821&biw=1440&rlz=1C5CHFA_enUS962US962&hl=en&sxsrf=APq-WBueKewydoJ81k0LTXHs_CUmhLraOA%3A1650753684291&source=hp&ei=lIBkYpeIEKP89AOL5KigAw&iflsig=AHkkrS4AAAAAYmSOpIkU8D6vt6DHopqql2jEsmsVBjxZ&ved=0ahUKEwiXotnXoKv3AhUjPn0KHQsyCjQQ4dUDCAk&uact=5&oq=8601+W+Cross+Dr%2C+Littleton%2C+CO+80123&gs_lcp=Cgdnd3Mtd2l6EAMyAggmMgYIABAWEB4yBggAEBYQHjoHCCMQ6gIQJ1DuBVjuBWCSCGgBcAB4AIABW4gBW5IBATGYAQCgAQKgAQGwAQo&sclient=gws-wiz#'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>4999 S Prince Ct, Apt 101, Littleton, CO 80123</a></h2>
    </div>
    <br/>
    <div className='cardgroup'>
        <h1 className='underline'>Menu & Prices</h1>
    <CardGroup className='cardgroup'>
  <Card className='cardgroup'>
    <Card.Img variant="top" src={WomenServ} />
    <Card.Body>
      <Card.Title><h3>Womens Services:</h3></Card.Title>
      <Card.Text className='cardgroup'>
        <ul>
            <li><h5>Wash & Style - $30.00</h5></li>
            <li><h5>Cut Only - $29.00</h5></li>
            <li><h5>Wash Cut & Blowdry - $45.00</h5></li>
            <li><h5>Wash Only - $15.00</h5></li>
            <li><h5>Style (Curles, Straighten) - $25.00</h5></li>
            <li><h5>Girls Cut - $18.00</h5></li>
            <li><h5>Girls Style(Curls, Braids, Etc) - $20.00</h5></li>

        </ul>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className='cardgroup'>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/young-man-getting-stylish-haircut-picture-id1179764380?k=20&m=1179764380&s=612x612&w=0&h=FCBTnJt5XPzmZEKvXc5-uBP4cbEdUqJ4FHj3nlVoyRQ=" />
    <Card.Body>
      <Card.Title><h3>Mens Services</h3></Card.Title>
      <Card.Text>
        <ul>
        <li><h5>Clipper Cut - $30.00</h5></li>
            <li><h5>Scissor Cut - $32.00</h5></li>
            <li><h5>Add Bear Trim - $10.00</h5></li>
            <li><h5>Add Wash - $10.00</h5></li>
            <li><h5>Clean up Neckline - $15.00</h5></li>
            <li><h5>Boys Cut - $25.00</h5></li>
            <li><h5>Highlights/Color - Requires Consultation</h5></li>
        
        </ul>{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='cardgroup'>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/hair-salon-coloring-picture-id460389871?k=20&m=460389871&s=612x612&w=0&h=IR3OR7TEEYtym0iel7jsTIZyf5GF1tx9ee-hZRG4X0g=" />
    <Card.Body>
      <Card.Title><h3>Color & Highlights</h3></Card.Title>
      <Card.Text>
      <ul>
        <li><h5>All Over Color  - $150.00</h5></li>
            <li><h5>Full/Partial Highlight - $120.00/$85.00</h5></li>
            <li><h5>LowLight per Color - $15.00</h5></li>
            <li><h5>Add Cut With Color - $15.00</h5></li>
            <li><h5>Toner Blond Refresh - $100.00</h5></li>
            <li><h5>Balyage/Ombre - $250.00</h5></li>
            <li><h5>Color Correction - Requires Consultation</h5></li>
            <li><h5>All Over Bleach & Tone  - $150.00</h5></li>
        
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='cardgroup'>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/beauty-time-for-bride-picture-id1031853464?k=20&m=1031853464&s=612x612&w=0&h=Vp3bdZLFlhAxyFunSxP7ied_-PSYJBDTITbwPSm8cUE=" />
    <Card.Body>
      <Card.Title><h3>Special Events</h3></Card.Title>
      <Card.Text>
      <ul>
        <li><h5>Formal Hair/ Updo  - $95.00</h5></li>
            <li><h5>Full Face Makeup - $72.00/$85.00</h5></li>
            <li><h5> Add Lashes - $15.00</h5></li>
         
        
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card> <Card className='cardgroup'>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/various-hair-dresser-tools-on-pink-background-with-copy-space-picture-id1024577404?k=20&m=1024577404&s=612x612&w=0&h=4HSEj5psaIL1_7zA-D75DPjjyiqroJbNIwk5FV4d2_4=" />
    <Card.Body>
      <Card.Title><h3>Other</h3></Card.Title>
      <Card.Text>
      <ul>
        <li><h5>Deep Conditioning  - $45.00</h5></li>
            <li><h5>Perm (Trim Included) - $175.00</h5></li>
           
           
        
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
<Button>Book a Service</Button>
    </div>
  
      
    </div>
    <br/>
    
    <div className='about'>
        <h3>About Me</h3>
        <Container>
  <Row>
    <Col className='about'>
        <Image fluid className='Cinthia' src={Cinthia} />
    </Col>
    <Col>
    <p>My name is Cinthia Torres and I am your stylist. I strive to give you the look that you want and express the inner beauty we all have! </p>
    
    </Col>
  </Row>
  
</Container>
    </div>

</div>
    )
}

export default Home;