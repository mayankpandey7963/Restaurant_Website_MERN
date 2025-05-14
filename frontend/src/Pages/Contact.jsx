import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ContactForm from '../Components/ContactForm';
import GoogleMap from '../Components/GoogleMap'; 

// Components
import Footer from '../Components/Footer';

// icons
import { MdAddIcCall } from "react-icons/md";  // Phone number
import { MdOutlineMail } from "react-icons/md"; // email
import { MdOutlineFax } from "react-icons/md"; // fax address
import { FaLocationDot } from "react-icons/fa6"; // location




const Contact = () => {
  return (
    <>
      
      <Container className='bg-light my-4' >
        <Row className='p-3 d-flex justify-content-around'>
          <Col sm={4} >
            <Row>
              <Col sm={12} className='bg-white d-flex p-3 my-2'>
              <a href="MdAddIcCall" className='text-danger fs-3 text-center bg-light' style={{width:'45px',height:'45px' , borderRadius: '100%'}} ><MdAddIcCall /></a>
              <div className="phone_content text-center ms-3">
                <span className='fw-bold'>Phone Number</span><br />
                <a href="tel:+9876543213" className='text-decoration-none text-danger'>+91 9876543213</a>
              </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className=' bg-white d-flex p-3 my-2'>
              <a href="MdOutlineMail" className='text-danger fs-3 text-center bg-light' style={{width:'45px',height:'45px' , borderRadius: '100%'}} ><MdOutlineMail /></a>
              <div className="phone_content text-center ms-3">
                <span className='fw-bold'>Email address</span><br />
                <a href="mailto:info@spiceandsizzle.com" className='text-decoration-none text-danger'>info@spiceandsizzle.com</a>
              </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className=' bg-white d-flex p-3 my-2'>
              <a href="MdOutlineFax" className='text-danger fs-3 text-center bg-light' style={{width:'45px',height:'45px' , borderRadius: '100%'}} ><MdOutlineFax /></a>
              <div className="phone_content text-center ms-3">
                <span className='fw-bold'>Fax number</span><br />
                <a href="tel:+1-234-567-8910" className='text-decoration-none text-danger'>+1-234-567-8910</a>
              </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className='bg-white d-flex p-3 my-2'>
              <a href="FaLocationDot" className='text-danger fs-3 text-center bg-light' style={{width:'45px',height:'45px' , borderRadius: '100%'}} ><FaLocationDot /></a>
              <div className="phone_content text-center ms-3">
                <span className='fw-bold'>Location</span><br />
                <p className='text-danger'>Gaziabad, Uttar Pradesh</p>
              </div>
              </Col>
            </Row>  
          </Col>


          <Col sm={7} className='bg-white'>
            <h4 className='text-danger fw-bold'>Send Message</h4>
            <p className='text-secondary'>"Have questions or feedback? Send us a message, and we'll get back to you shortly!"</p>
            <ContactForm/>
            

          </Col>
        </Row>
      </Container>

      <Container className='bg-light my-4'>
        <div className="google_text text-center text-danger py-3">
          <h1>Find us on Google</h1>
          <p>"Explore our location on Google Maps for easy navigation and directions to reach us."</p>
        </div>

       <GoogleMap/>

      </Container>

      <Container fluid className='p-0'>
        <Footer/>
      </Container>


    </>
  )
}

export default Contact
