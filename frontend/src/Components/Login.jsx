import React, { useState } from 'react'
import {Form, Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Login = () => {

  const [signUpData, setSignUpData] = useState({
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
      const response = await axios.post('http://localhost:3000/auth/login', signUpData);
      if(response.status === 200){
        localStorage.setItem('token', response.data.token)
        navigate('/')
      }
      setSignUpData({
        email: '',
        password: ''
      })
    } catch (err) {
      console.error(err);
      alert("An error occured while logging in. please try again...");
    }
    
  }

  const handleReset = () =>{
    setSignUpData({
      email: '',
      password: ''
    })
  }

  return (
    <Container className='mt-5'>
         
      <Form  onSubmit={handleSubmit}>
          
        <Row >
          
          <Col sm={4} className='mx-auto' style={{backgroundColor: '#87CEEB'}}>
            <h2 className='text-center fw-bold '>Login</h2>

            <Row>
              <Col sm={12}>
                <Form.Group controlId='form-email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' name='email' value={signUpData.email} onChange={handleChange} required></Form.Control>
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

            <div className='d-flex justify-content-center my-3'>
              <Link className='text-decoration-none' style={{color: 'gray'}} to="/Signup">Please Register for an account</Link>
            </div>

            <div className='btn_container w-75 d-flex justify-content-center mx-auto my-3'>
              <Button variant='primary' className='w-100' type='submit'>Submit</Button>
              <Button variant='danger' onClick={handleReset} className='w-100 ms-2'>Reset</Button>
            </div>

          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Login
