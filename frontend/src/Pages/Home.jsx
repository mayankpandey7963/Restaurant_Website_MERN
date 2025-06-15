import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Carousel, Card, Image, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import TypewriterEffect from '../Components/TypeWriterEffect';


// Icons
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import '../css/Home.css'


// Component
import Counter from '../Components/Counter';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const Home = () => {

  // const backgroundStyle = {
  //   backgroundImage: `url(${backgroundImage})`, 
  //   backgroundSize: 'cover', 
  //   backgroundPosition: 'center', 
  //   height: '100vh'
  // };

  const navigate = useNavigate();
  const fetchCustomer = async () =>{
    try{
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/auth/home', {
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


  const foodCardItems = [
    {
      src: "/Foods/Fried_Chicken.jpeg",
      alt: "fried chicken",
      title: "Fried Chicken",
      price: "120 Rs",
      discount: "20% off",
      desc: "Enjoy our crispy Fried Chicken, seasoned to perfection and juicy inside. A delightful treat that pairs perfectly with any meal!",
      explore: "Explore"
    },
    {
      src: "/Junk_Food/Fries/French_Fries.jpg",
      alt: "French Fry",
      title: "French Fry",
      price: "80 Rs",
      discount: "23% off",
      desc: "Dive into our golden French Fries, perfectly crispy on the outside and fluffy on the inside. An irresistible snack that enhances any meal experience!",
      explore: "Explore"
    },
    {
      src: "/Foods/Garlic_Bread.jpg",
      alt: "Garlic Bread",
      title: "Garlic Bread",
      price: "160 Rs",
      discount: "25% off",
      desc: "Treat yourself to our warm Garlic Bread, infused with rich garlic flavor and buttery goodness. A delightful accompaniment to any meal that you won't want to miss!",
      explore: "Explore"
    },
    {
      src: "/Foods/Salads.jpg",
      alt: "Salad",
      title: "Salad",
      price: "130 Rs",
      discount: "10% off",
      desc: "Enjoy our fresh Garden Salad, a vibrant mix of crisp veggies and flavorful dressing. A healthy and refreshing addition to any meal!",
      explore: "Explore"
    },
    {
      src: "/Foods/Steak.jpeg",
      alt: "Steak",
      title: "Steak",
      price: "80 Rs",
      discount: "15% off",
      desc: "Savor our succulent Steak, expertly seared and richly seasoned. A flavorful indulgence that complements any meal!",
      explore: "Explore"
    },
    {
      src: "/Junk_Food/Pizza/pepperoni_pizza.jpeg",
      alt: "Pepperoni Pizza",
      title: "Pepperoni Pizza",
      price: "180 Rs",
      discount: "17% off",
      desc: "Delight in our classic Pepperoni Pizza, topped with zesty pepperoni and bubbling mozzarella. A bold, savory slice of perfection.!",
      explore: "Explore"
    },
    {
      src: "/Foods/Pasta.jpg",
      alt: "Pasta",
      title: "Pasta",
      price: "99 Rs",
      discount: "10% off",
      desc: "Savor our creamy, perfectly cooked Pasta, tossed in rich sauce and aromatic herbs. A comforting classic with every bite.",
      explore: "Explore"
    }
  ]


  return (
    <>
      
      {/* Hero Section */}
      {/* <div style={backgroundStyle} className='pt-5'>
        <h1 className='p-3 text-white'><TypewriterEffect/></h1>
        <div>
          <Button variant="danger" className='ms-3 p-2'><Link className='text-decoration-none text-white' to='/menu'>Let's Explore</Link></Button>
        </div>
      </div> */}



       {/*CAROUSEL SPECIAL_OFFERS */}
        <Container fluid className="special_Offer mt-1">

          <Carousel>
            <Carousel.Item>
              <Image src="/special_offers/burger.jpeg" className='slideImage img-fluid w-100' alt="" />
              <Carousel.Caption className='caption bg-dark w-50 p-1 mx-auto'>
                <h3>"A Burger Beyond the Ordinary!"</h3>
                <p>"Buy 1, Get 1 Free – Limited Time Offer!"</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <Image src="/special_offers/pizza-2.jpeg" className='slideImage img-fluid w-100' alt="" />
              <Carousel.Caption className='caption w-50 bg-dark p-1 mx-auto'>
                <h3>"Fresh, Hot, and Cheesy!"</h3>
                <p>"Enjoy a Free Drink with Every Pizza – Today Only!"</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <Image src="/special_offers/healthy-diet.jpg" className='slideImage img-fluid w-100' alt="" />
              <Carousel.Caption className='caption w-50 bg-dark p-1 mx-auto'>
                <h3>"Deliciously Healthy, Perfectly Balanced!"</h3>
                <p>"Buy Any Two Healthy Dishes, Get the Third One Half Price!" </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </Container>

      {/* Card-food */}
      <Container className='favourite_food mt-4'>
        <h3 className='pb-2'>Chef's Special Food</h3>
        <Row className="g-4">
          {foodCardItems.map((foods, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={foods.src}
                  alt={foods.alt}
                  className="card_food"
                  style={{ height: '12rem', objectFit: 'cover', borderRadius: '0.5rem 0.5rem 0 0' }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5" className="fw-semibold text-dark mb-2" style={{fontFamily:'initial'}}>
                    {foods.title}
                  </Card.Title>
          
                  <div className="mb-2">
                    <strong className="text-dark me-2">&#8377;{foods.price}</strong>
                    <small className="text-muted">{foods.discount}% Off</small>
                  </div>
          
                  <Card.Text className="text-secondary small mb-3">
                    {foods.desc}
                  </Card.Text>
          
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Button variant="outline-primary" size="sm" className="fw-medium px-3">
                      {foods.explore || "Explore"} <MdKeyboardDoubleArrowRight />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* See More Card */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="text-center shadow-sm border-0 w-100">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                <Nav.Link as={Link} to="/menu" className="mb-2">
                  <Card.Img
                    src="/icons/see_more.png"
                    alt="See More"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Nav.Link>
                <Nav.Link as={Link} to="/menu" className="fw-semibold text-dark">
                  See More
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>


     


      {/* About_page */}
      <div>
        <Container className='mt-4'>
          <h3 className='fw-bold p-2'>Discover Our Flavors</h3>
          {/* Row-1 */}
          <Row className='g-0'>
            <Col md={6}>
              <img src="/image-gallery/image-1.jpg" className='imgage_1 img-fluid' alt="Image_1" />
            </Col>
            <Col md={6}>
              <div className="text-1 p-4">
                <h3 className='text-center fw-bold text-dark fs-4'>"Celebrate good foods at Spice & Sizzle!"</h3>
                <p className='text-justify px-3 lh-base' style={{fontSize:'15px'}}>Join the fun and create unforgettable memories at our lively restaurant, where every meal turns into a celebration! Whether it's a birthday bash, a casual get-together, or a night out with friends, we provide the perfect ambiance for your special moments. With delicious food, vibrant drinks, and a buzzing atmosphere, you'll feel right at home as you enjoy the company of your loved ones.</p>

                <ul className='list-unstyled ps-3 lh-lg' style={{fontSize:'13px'}}>
                  <li> 
                    <FaCheckCircle  
                    className='text-dark me-2'/>  
                    <span className='text-dark fw-bold pe-2'>Lively Atmosphere:</span> 
                    Perfect for parties, gatherings, and celespanrations.
                  </li>

                  <li>
                    <FaCheckCircle 
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Delicious Menu:</span> 
                    A variety of mouth-watering dishes and signature cocktails.
                  </li>

                  <li>
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Great for Groups:</span> 
                    Spacious seating and customized options for events.
                  </li>

                  <li>
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Friendly Staff:</span> 
                    Dedicated to making your experience special.
                  </li>

                  <li>
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Music & Fun:</span> 
                    Enjoy the perfect mix of good tunes and a cheerful vibe.
                  </li>

                </ul>

              </div>
            </Col>
          </Row>


          {/* Row-2 */}
          <Row className='g-0 mt-5'>
            <Col md={6}>
              <div className="text-1 p-4">
                <h3 className='text-center fw-bold text-dark'>"A Feast for Your Senses!"</h3>
                <p className='text-justify px-3 lh-base' style={{fontSize:'15px'}}>Indulge in a culinary journey where every dish is crafted with passion and served with care. From the freshest ingredients to mouth-watering flavors, our menu brings together a variety of cuisines to satisfy every palate. Whether you’re craving something classic or adventurous, we have something delicious just for you. Let your taste buds experience the magic of food like never before!</p>

                <ul className='list-unstyled ps-3 lh-lg' style={{fontSize:'14px'}}>
                  <li> 
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Fresh & Flavorful Ingredients:</span>
                    Only the finest, locally-sourced ingredients.
                  </li>

                  <li>
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Variety of Cuisines:</span> 
                    From local favorites to international delights.
                  </li>

                  <li>
                    <FaCheckCircle  
                    className='text-dark me-2'/> 
                    <span className='text-dark fw-bold pe-2'>Perfect for Any Occasion: </span> 
                    Whether it's a casual meal or a special celebration.
                  </li>
                  
                </ul>

              </div>
            </Col>

            <Col md={6}>
              <img src="/image-gallery/image-2.jpeg" className='imgage_2 img-fluid' alt="Image_2" />
            </Col>
            
          </Row>


          {/* Row-3 */}
          <Row className="d-flex align-items-stretch mt-5">
            <h3 className='mb-4 fw-bold'>Gallery</h3>
            <Col md={3}>
              <Image fluid src="/image-gallery/image-3.jpeg" className='h-100 w-100 rounded' alt="Image_3" />
            </Col>
            <Col md={3}>
              <Image fluid src="/image-gallery/image-4.jpeg" className='h-100 w-100 rounded' alt="Image_4" />
            </Col>

            <Col md={3}>
              <Image fluid src="/image-gallery/image-gallery-1.jpeg" className='h-100 w-100 rounded' alt="image-gallery-1" />
            </Col>
            <Col md={3}>
              <Image fluid src="/image-gallery/image-gallery-2.jpeg" className='h-100 w-100 rounded' alt="image-gallery-1" />
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
