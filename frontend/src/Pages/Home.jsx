import React, { useEffect } from 'react'
import backgroundImage from '../assets/bg/bg-4.jpg'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import TypewriterEffect from '../Components/TypeWriterEffect';


// Icons
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import '../Styles/Home.css'


// Img
import Image_1 from '../assets/image-gallery/image-3.jpeg'
import Image_2 from '../assets/image-gallery/image-2.jpeg'

import Image_3 from '../assets/image-gallery/image-4.jpeg'
import Image_4 from '../assets/image-gallery/pl.jpg'
import Image_5 from '../assets/image-gallery/image-gallery-2.jpeg'

// special_offers
import burger from '../assets/special_offers/burger.jpeg'
import pizza_2 from '../assets/special_offers/pizza-2.jpeg'
import healthy_diet from '../assets/special_offers/healthy-diet.jpg'
import Counter from '../Components/Counter';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const Home = () => {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh'
  };

  const navigate = useNavigate();
  const fetchCustomer = async () =>{
    try{
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/auth/home', {
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      if(response.status !== 200){
        navigate('/login')
      }
    }
    catch(err){
      navigate('/login');
      console.log(err);
    }
  }

  useEffect(() =>{
    fetchCustomer();
  }, []);


  return (
    <>
      
      {/* Hero Section */}
      <div style={backgroundStyle} className='position-relative'>
        <h1 className='p-3 text-white'><TypewriterEffect/></h1>
        <div>

          {/* Subheading */}
          <span className=' subheading p-3 fs-4 fw-bold rounded text-white position-absolute top-50 start-50 translate-middle'>"Explore Fresh Ingredients and Exquisite Recipes"</span>

          <Button variant="danger" className='ms-3 p-2'><Link className='text-decoration-none text-white' to='/menu'>Let's Explore</Link></Button>
        </div>
      </div>

      {/* Card-food */}
      <Container fluid className='favourite_food mt-4'>
        <Row>
          <CardGroup>
            {/* Col-1 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/Fried Chicken.jpeg" />
                <Card.Body>
                  <Card.Title className=''>
                    <h4>Fried Chicken</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$9.99</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Enjoy our crispy Fried Chicken, seasoned to perfection and juicy inside. A delightful treat that pairs perfectly with any meal!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-2 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/French_Fries.jpg" />
                <Card.Body>

                <Card.Title className=''>
                    <h4>French Fry</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$3.99</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Dive into our golden French Fries, perfectly crispy on the outside and fluffy on the inside. An irresistible snack that enhances any meal experience!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-3 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/Garlic Bread.jpg" />
                <Card.Body>

                  <Card.Title className=''>
                    <h4>Garlic Bread</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$4.99</strong>
                      <small className='text-danger'>10% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Treat yourself to our warm Garlic Bread, infused with rich garlic flavor and buttery goodness. A delightful accompaniment to any meal that you won't want to miss!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </Row>


        <Row className='mt-4'>
          <CardGroup>
            {/* Col-4 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/Salads.jpg" />
                <Card.Body>
                  <Card.Title className=''>
                    <h4>Salad</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$4.79</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Enjoy our fresh Garden Salad, a vibrant mix of crisp veggies and flavorful dressing. A healthy and refreshing addition to any meal!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-5 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/Steak.jpeg" />
                <Card.Body>

                <Card.Title className=''>
                    <h4>Steak</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$3.99</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Savor our succulent Steak, expertly seared and richly seasoned. A flavorful indulgence that complements any meal!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-6 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/paneer_roll.jpeg" />
                <Card.Body>

                  <Card.Title className=''>
                    <h4>Paneer Roll</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$4.99</strong>
                      <small className='text-danger'>10% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Relish our soft and spicy Paneer Roll, packed with vibrant flavors and fresh ingredients. A perfect snack for any time of the day!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </Row>

        {/*CAROUSEL SPECIAL_OFFERS */}
        <Container className="special_Offers mt-4">

<Carousel>
  <Carousel.Item>
    <img src={burger} className='slideImage img-fluid w-100' alt="" />
    <Carousel.Caption className='caption w-50 p-2 mx-auto'>
      <h3>"A Burger Beyond the Ordinary!"</h3>
      <p>"Buy 1, Get 1 Free – Limited Time Offer!"</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img src={pizza_2} className='slideImage img-fluid w-100' alt="" />
    <Carousel.Caption className='caption w-50 p-2 mx-auto'>
      <h3>"Fresh, Hot, and Cheesy!"</h3>
      <p>"Enjoy a Free Drink with Every Pizza – Today Only!"</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img src={healthy_diet} className='slideImage img-fluid w-100' alt="" />
    <Carousel.Caption className='caption w-50 p-2 mx-auto'>
      <h3>"Deliciously Healthy, Perfectly Balanced!"</h3>
      <p>"Buy Any Two Healthy Dishes, Get the Third One Half Price!" </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </Container>


        <Row className='mt-4'>
          <CardGroup>
            {/* Col-7 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/Sushi.jpg" />
                <Card.Body>
                  <Card.Title className=''>
                    <h4>Sushi</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$9.99</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Delight in our fresh and flavorful Sushi, crafted with precision and the finest ingredients. A perfect bite of elegance for any occasion!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-8 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/thali.jpeg" />
                <Card.Body>

                <Card.Title className=''>
                    <h4>Thali</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$18.99</strong>
                      <small className='text-danger'>20% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Dive into our golden French Fries, perfectly crispy on the outside and fluffy on the inside. An irresistible snack that enhances any meal experience!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>


            {/* Col-9 */}
            <Col md={4}>
              <Card className='h-100 me-3'>
                <Card.Img variant="top"  className='card_food' src="/Foods/pepperoni_pizza.jpeg" />
                <Card.Body>

                  <Card.Title className=''>
                    <h4>Pepperoni Pizza</h4>
                    <div className="rates">
                      <strong className='pe-2 text-success'>$24.99</strong>
                      <small className='text-danger'>10% Off</small>
                    </div>
                  </Card.Title>
                  <Card.Text><b className='text-danger'>Description: </b>
                  Indulge in our cheesy Pepperoni Pizza, topped with savory pepperoni and baked to golden perfection. A classic favorite for every pizza lover!
                  </Card.Text>
                  <div className="btn_container d-flex justify-content-between">
                    <Button variant='danger' className='fw-bold border-0'>Explore <MdKeyboardDoubleArrowRight /></Button>
                    <Counter/>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </Row>



      </Container>


     


      {/* About_page */}
      <div>
        <Container fluid className='mt-2'>

          {/* Row-1 */}
          <Row className='g-0 mt-4'>
            <Col md={6}>
              <img src={Image_1} className='imgage_1 img-fluid' alt="Image_1" />
            </Col>
            <Col md={6}>
              <div className="text-1 p-4">
                <h3 className='text-center fw-bold text-danger'>"Celebrate good foods at Spice & Sizzle!"</h3>
                <p className='text-justify px-3 lh-base'>Join the fun and create unforgettable memories at our lively restaurant, where every meal turns into a celebration! Whether it's a birthday bash, a casual get-together, or a night out with friends, we provide the perfect ambiance for your special moments. With delicious food, vibrant drinks, and a buzzing atmosphere, you'll feel right at home as you enjoy the company of your loved ones.</p>

                <ul className='list-unstyled ps-3 lh-lg'>
                  <li> <FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Lively Atmosphere:</span> Perfect for parties, gatherings, and celespanrations.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Delicious Menu:</span> A variety of mouth-watering dishes and signature cocktails.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Great for Groups:</span> Spacious seating and customized options for events.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Friendly Staff:</span> Dedicated to making your experience special.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Music & Fun:</span> Enjoy the perfect mix of good tunes and a cheerful vibe.</li>
                </ul>

              </div>
            </Col>
          </Row>


          {/* Row-2 */}
          <Row className='g-0 mt-5'>
            <Col md={6}>
              <div className="text-1 p-4">
                <h3 className='text-center fw-bold text-danger'>"A Feast for Your Senses!"</h3>
                <p className='text-justify px-3 lh-base'>Indulge in a culinary journey where every dish is crafted with passion and served with care. From the freshest ingredients to mouth-watering flavors, our menu brings together a variety of cuisines to satisfy every palate. Whether you’re craving something classic or adventurous, we have something delicious just for you. Let your taste buds experience the magic of food like never before!</p>

                <ul className='list-unstyled ps-3 lh-lg'>
                  <li> <FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Fresh & Flavorful Ingredients:</span> Only the finest, locally-sourced ingredients.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Variety of Cuisines:</span> From local favorites to international delights.</li>
                  <li><FaCheckCircle  className='fs-6 text-danger'/> <span className='text-danger'>Perfect for Any Occasion: </span> Whether it's a casual meal or a special celebration.</li>
                  
                </ul>

              </div>
            </Col>

            <Col md={6}>
              <img src={Image_2} className='imgage_2 img-fluid' alt="Image_2" />
            </Col>
            
          </Row>


          {/* Row-3 */}
          <Row className="d-flex align-items-stretch mt-5">
            <Col md={4}>
              <img src={Image_3} className='img-fluid h-100 rounded' alt="Image_3" />
            </Col>
            <Col md={4}>
              <img src={Image_4} className='img-fluid h-100 rounded' alt="Image_4" />
            </Col>

            <Col md={4}>
              <img src={Image_5} className='img-fluid h-100 rounded' alt="Image_5" />
            </Col>
          </Row>

        </Container>
      </div>


      {/* Footer */}  
      <Footer/>

    </>
  )
}

export default Home
