import React, {useState} from 'react'
import {Form, Container, Row, Col, Button} from 'react-bootstrap';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      })
    
      const handleChange =(e) =>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("Form submitted", formData);
        alert('Message sent!');
    
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        })
      }

  return (
    <>
     

    <Container>
    <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId='form-name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='name' id='name' value={formData.name} onChange={handleChange} placeholder='Enter your name'required></Form.Control>
          </Form.Group>
          
          <Form.Group as={Col} controlId='form-email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email'required></Form.Control>
          </Form.Group>
        </Row>


        <Row className='mt-4'>
          <Form.Group as={Col} controlId='form-number'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone number'required></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId='form-address'>
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={1} name='address' value={formData.address} onChange={handleChange} required></Form.Control>
          </Form.Group>
        </Row>


        <Row>
          <Form.Group as={Col} controlId='form-message'>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name='message' value={formData.message} placeholder='Send a message...' onChange={handleChange} required></Form.Control>
          </Form.Group>
        </Row>

        <Button variant='primary' type='submit' className='my-3'>Send message</Button>
        <Button variant='danger' type='reset' className='ms-3' >Reset</Button>

      </Form>
    </Container>
      



    </>
  )
}

export default ContactForm
