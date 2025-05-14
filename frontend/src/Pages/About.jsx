import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Button} from 'react-bootstrap';
import Footer from '../Components/Footer'

// icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// css
import '../Styles/About.css'

const About = () => {
  return (
    <>
      {/* Background_image */}
      <Container fluid className="image p-0">
        <Row className='g-0'>
          <Col>
          <Card className="bg-dark text-white rounded-0">
            <Card.Img src="./About_page/about_wallpaper.jpg" className='about_wallpaper' alt="about_wallpaper" />
            <Card.ImgOverlay>
              <Card.Title><h1 style={{color: 'red', fontWeight: 'bolder', fontFamily: 'cursive'}} >Discover Who We Are</h1></Card.Title>
              <Card.Text className='w-25' style={{color: 'yellow', lineHeight: '28px'}}>
              Welcome to our restaurant—a place where great food meets good times. We believe in simple, delicious dishes made from the freshest ingredients. Whether you’re here to grab a quick bite, catch up with friends, or celebrate, we’ve got something special cooking just for you.

              From our signature <span className='text-danger fw-bold'>Savory Spice Bowl</span> to our cozy atmosphere, we’re all about making sure you leave happy, full, and eager to come back. We're more than a restaurant; we’re your second home.
              </Card.Text>
            </Card.ImgOverlay>
           </Card>
          </Col>
        </Row>
      </Container>

      {/* History or restaurants */}
      <Container className='bg-light mt-4'>
        <h1 className='text-danger text-center fw-bold'>"Where It All Began <br/> The Story Behind Spice & Sizzle"</h1>
        <Row className='mt-5'>
          <Col sm={6} className='h-75'>
            <img src="./About_page/history-2.jpg" className='img-fluid rounded w-100 h-75' alt="" />
          </Col>
          <Col sm={6}>
            <h3 className='text-center text-primary fw-bold py-3'>The Spice & Sizzle Story</h3>
            <p style={{lineHeight: '28px'}}><span className='text-danger fw-bold'> At Spice & Sizzle</span>  our story began with a simple dream: to create a place where people could gather and enjoy bold, unforgettable flavors. What started as a small, family-owned restaurant quickly blossomed into a local favorite, thanks to our unwavering passion for blending the richness of traditional spices with the creativity of modern culinary techniques.</p>
            
            <p>
              From our humble beginnings, we set out to do more than just serve food—we aimed to create a warm, welcoming environment where every meal would be an experience to remember. Our kitchen became a canvas, where time-honored recipes from diverse cultures were reimagined with a fresh, contemporary twist. Each dish tells a story, celebrating the union of heritage and innovation.
            </p>

            <p>
             Over the years, Spice & Sizzle has grown, but our commitment to quality and creativity remains unchanged. Our dishes are crafted with care, sizzling with the vibrant flavors of carefully selected spices, and served with the same love and hospitality that fueled our journey from day one.
            </p>

            <p>Whether you're savoring a classic favorite or trying something new, we promise every visit will bring you a taste of the passion and pride that we pour into each plate. Spice & Sizzle is more than just a restaurant—it’s a culinary adventure, where each meal captures the essence of both tradition and modern dining.</p>

            <ul>
              <li><span className='text-primary fw-bold'>Honoring Our Roots:</span> We remain committed to our core values—serving flavorful, sizzling meals that reflect our rich heritage and culinary creativity.</li>
              <li><span className='text-primary fw-bold'>Your Table Awaits:</span> Today, we continue to offer the same love, passion, and hospitality in every plate, inviting you to share in our journey.</li>
            </ul>

          </Col>
        </Row>
      </Container>

      {/* Our Chef's profile */}
      <Container className='mt-5' style={{backgroundColor:'#F7F7F7'}}>
        <h1 className='text-center text-danger fw-bold py-4' style={{fontFamily:'cursive'}}>Our Master Chef's Profile</h1>
        <CardGroup>

          <Card className='me-3'>
            <Card.Img variant="top" className='h-50' src="../About_page/John_Andress.jpg" />
            <Card.Body>
              <Card.Title>John Andress</Card.Title>
              <Card.Text style={{lineHeight:'27px'}}>
                
              Chef John Andress creates unforgettable, flavorful dishes at Spice & Sizzle, blending traditional and contemporary flavors with fresh, local ingredients.
              </Card.Text>
              <Button variant='danger' className='w-100 mt-auto'><a className='text-decoration-none text-white fw-bold' target='_blank' href="https://en.wikipedia.org/wiki/Jos%C3%A9_Andr%C3%A9s">Learn More <MdKeyboardDoubleArrowRight /></a></Button>
          </Card.Body>
          </Card>


          <Card className='me-3'>
            <Card.Img variant="top" className='h-50' src="../About_page/cat-cora.jpg" />
            <Card.Body>
              <Card.Title>Cat Cora</Card.Title>
              <Card.Text style={{lineHeight:'28px'}}>
              Chef Cat Cora crafts exceptional Mediterranean dishes at Spice & Sizzle, showcasing her signature blend of bold flavors and fresh ingredients for a delightful dining experience.
              </Card.Text>

              <Button variant='danger' className='w-100 mt-auto'><a className='text-decoration-none text-white fw-bold' target='_blank' href="https://en.wikipedia.org/wiki/Cat_Cora">Learn More <MdKeyboardDoubleArrowRight /></a></Button>
          </Card.Body>
          </Card>


          <Card className='me-3'>
            <Card.Img variant="top" className='h-50' src="../About_page/sanjeev kapoor.jpg" />
            <Card.Body>
              <Card.Title>Sanjeev Kapoor</Card.Title>
              <Card.Text style={{lineHeight:'28px'}}>
              Chef Sanjeev Kapoor delights guests at Spice & Sizzle with his innovative Indian cuisine, blending traditional flavors with modern techniques to create unforgettable dishes.
              </Card.Text>
              <Button variant='danger' className='w-100 mt-auto'><a className='text-decoration-none text-white fw-bold' target='_blank' href="https://www.sanjeevkapoor.com/">Learn More <MdKeyboardDoubleArrowRight /></a></Button>
            </Card.Body>
          </Card>

          <Card className='me-3'>
            <Card.Img variant="top" className='h-50' src="../About_page/andrew-carmellini.jpg" />
            <Card.Body>
              <Card.Title>Andrew Carmellini</Card.Title>
              <Card.Text style={{lineHeight:'28px'}}>
              Chef John Andress creates unforgettable, flavorful dishes at Spice & Sizzle, blending traditional and contemporary flavors with fresh, local ingredients.
              </Card.Text>
              <Button variant='danger' className='w-100 mt-auto'><a className='text-decoration-none text-white fw-bold' target='_blank' href="https://en.wikipedia.org/wiki/Andrew_Carmellini">Learn More <MdKeyboardDoubleArrowRight /></a></Button>
            </Card.Body>
          </Card>


        </CardGroup>
      </Container>

      {/* footer */}
      <Container fluid className='p-0'>
        <Footer/>
      </Container>





    </>
  )
}

export default About
