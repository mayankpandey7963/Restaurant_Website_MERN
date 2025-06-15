import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../Components/ContactForm';
import GoogleMap from '../Components/GoogleMap'; 
import Footer from '../Components/Footer';
import { MdAddIcCall, MdOutlineMail, MdOutlineFax } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
      <Container className='my-5'>
        <Row className='g-4'>
          <Col md={5}>
            <div className='bg-white p-3 rounded shadow-sm mb-3 d-flex'>
              <div className='fs-4 bg-light rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>
                <MdAddIcCall />
              </div>
              <div className='ms-3'>
                <div className='fw-bold'>Phone Number</div>
                <a href='tel:+9876543213' className='text-decoration-none'>+91 9876543213</a>
              </div>
            </div>

            <div className='bg-white p-3 rounded shadow-sm mb-3 d-flex'>
              <div className='fs-4 bg-light rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>
                <MdOutlineMail />
              </div>
              <div className='ms-3'>
                <div className='fw-bold'>Email Address</div>
                <a href='mailto:info@spiceandsizzle.com' className='text-decoration-none'>info@spiceandsizzle.com</a>
              </div>
            </div>

            <div className='bg-white p-3 rounded shadow-sm mb-3 d-flex'>
              <div className='fs-4 bg-light rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>
                <MdOutlineFax />
              </div>
              <div className='ms-3'>
                <div className='fw-bold'>Fax Number</div>
                <a href='tel:+1-234-567-8910' className='text-decoration-none'>+1-234-567-8910</a>
              </div>
            </div>

            <div className='bg-white p-3 rounded shadow-sm d-flex'>
              <div className='fs-4 bg-light rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>
                <FaLocationDot />
              </div>
              <div className='ms-3'>
                <div className='fw-bold'>Location</div>
                <p className='mb-0'>Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <div className='bg-white p-4 rounded shadow-sm'>
              <h4 className='fw-bold mb-2'>Send Message</h4>
              <p className='text-muted mb-4'>Have questions or feedback? Send us a message, and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <div className='text-center mb-4'>
          <h3 className='fw-bold'>Find us on Google</h3>
          <p className='text-muted'>Explore our location on Google Maps for easy navigation and directions to reach us.</p>
        </div>
        <GoogleMap />
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
