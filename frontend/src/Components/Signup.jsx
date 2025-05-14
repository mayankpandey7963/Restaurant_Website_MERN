import React, { useState } from 'react'
import {Form, Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

// icons
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleChange = (e) =>{
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("Form submitted", signUpData);
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', signUpData);
      console.log(response.data)
      if(response.status === 200){
        navigate('/login')
      }
      setSignUpData({
        name: '',
        email: '',
        password: ''
      })
    } catch (err) {
      console.error(err);
      alert("An error occured while signing up in the database. please try again...");
    }
    
  }

  const handleReset = () =>{
    setSignUpData({
      name: '',
      email: '',
      password: ''
    })
  } 

  return (

      <Container className='mt-5'>
        
        <Form  onSubmit={handleSubmit}>
          <Row >
            <Col sm={4} className='mx-auto' style={{backgroundColor: '#87CEEB'}}>
            <h2 className='text-center fw-bold '>Sign up</h2>

              <Row>
                <Col sm={12}>
                  <Form.Group controlId='form-name'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' name='name' value={signUpData.name} onChange={handleChange} required></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <Form.Group controlId='form-email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email'  value={signUpData.email} onChange={handleChange} required></Form.Control>
                  </Form.Group>         
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <Form.Group controlId='form-password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={signUpData.password} onChange={handleChange} required></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <div className='btn_container w-75 d-flex justify-content-center mx-auto my-3'>
                <Button variant='primary' className='w-100' type='submit'>Submit</Button>
                <Button variant='danger' type='reset' onClick={handleReset} className='w-100 ms-2'>Reset</Button>
              </div>

              <div className='d-flex justify-content-center mb-3'>
                <Link className='text-decoration-none text-white' to="/Login">Already have an account ?</Link>
              </div>

              <Row className='w-75 mx-auto g-0'>
                <Col className='w-100' sm={12}>
                  <Button className='w-100' variant='success'><FaFacebook /><a className='text-decoration-none text-white ps-2' href="signup with facebook">Sign up with Facebook</a></Button>
                </Col>
              </Row>

              <Row className='w-75 mx-auto g-0'>
                <Col className='w-100 py-3' sm={12}>
                  <Button className='w-100' variant='success'><FaGoogle /><a className='text-decoration-none text-white ps-2' href="signup with google">Sign up with Google</a></Button>
                </Col>
              </Row>

            </Col>
          </Row>
        </Form>
      </Container>
   
  )
}

export default Signup
