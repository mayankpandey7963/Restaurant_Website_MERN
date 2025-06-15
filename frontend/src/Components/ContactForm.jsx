import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    alert('Message sent!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
  };

  const handleReset = (e) =>{
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    })
  }


  return (
    <Container className='p-0'>
      <Form onSubmit={handleSubmit} className='bg-light p-3 rounded'>
        <Row className='g-3'>
          <Col md={6}>
            <Form.Group controlId='form-name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId='form-email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className='g-3 mt-1'>
          <Col md={6}>
            <Form.Group controlId='form-phone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId='form-address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as='textarea'
                rows={1}
                name='address'
                value={formData.address}
                onChange={handleChange}
                placeholder='Your address'
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
            <Form.Group controlId='form-message'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className='d-flex justify-content-start mt-4'>
          <Button variant='primary' type='submit'>Send Message</Button>
          <Button variant='secondary' onClick={handleReset} type='reset' className='ms-3'>Reset</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactForm;