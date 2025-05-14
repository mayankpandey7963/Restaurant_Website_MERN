import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// icons
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      
      <footer>
        <Container fluid className='bg-danger text-white mt-4'>
          <Row>
            <Col sm={4}>
              <ul className='list-unstyled pt-3 lh-base text-center'>
                <h4>CONTACT US</h4>
                <li><strong>Address:</strong> 123 Food Street, City Name</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Email:</strong> contact@restaurant.com</li>
                <li><strong>Openings:</strong> Mon-Sun: 10:00 AM - 11:00 PM</li>
              </ul>
            </Col>

            <Col sm={4}>
              <ul className='list-unstyled pt-3 lh-base text-center'>
                <h5>SOCIAL MEDIA</h5>
                <li><a className='text-white text-decoration-none' style={{fontSize:'17px'}} href="https://www.facebook.com" aria-label="Facebook"> Facebook <FaFacebook /></a></li>

                <li><a className='text-white text-decoration-none' style={{fontSize:'17px'}} href="https://twitter.com" aria-label="Twitter"> Twitter <BsTwitter /></a></li>

                <li><a className='text-white text-decoration-none' style={{fontSize:'17px'}} href="https://www.instagram.com" aria-label="Instagram"> Instagram <FaInstagramSquare /></a></li>

                <li><a className='text-white text-decoration-none' style={{fontSize:'17px'}} href="https://www.whatsapp.com" aria-label="WhatsApp"> WhatsApp<FaWhatsappSquare /></a></li>
              </ul>
            </Col>

            <Col sm={4}>
              <ul className='list-unstyled pt-3 lh-base text-center'>
                <h5>QUICK LINKS</h5>
                <li><Link className='text-white text-decoration-none' to='/about'>About</Link></li>
                <li><Link className='text-white text-decoration-none' to='/contact'>Contact</Link></li>
                <li><Link className='text-white text-decoration-none' to='/menu'>Menu</Link></li>
                <li><Link className='text-white text-decoration-none' to='/reservation'>Reservation</Link></li>
                <li><Button className='bg-white mt-3' variant='white'><Link className='text-secondary text-decoration-none fs-6 fw-bold p-2' to='/signup'>Sign up</Link></Button> 
                </li>
                
              </ul>
            </Col>
          </Row>

          <hr className='bg-primary' />

          <div className='pb-1 text-center'>
            <span><a className='text-decoration-none text-white' href="PRIVACY POLICY">PRIVACY POLICY</a></span>
            <div className="vr mx-2" style={{ height: '10px' }} />
            <span><a className='text-decoration-none text-white' href="TERMS & CONDITIONS">TERMS & CONDITIONS</a></span>

            <p>© 2024 SPICE & SIZZLE. ALL RIGHTS RESERVED.</p>
          </div>
          
        </Container>
        

      </footer>



    </>
  )
}

export default Footer
