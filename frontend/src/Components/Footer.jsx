import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-dark text-light border-top mt-5 pt-4">
      <Container>
        <Row className="gy-4">
          {/* Contact Info */}
          <Col xs={12} sm={6} md={4}>
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled small">
              <li><strong>Address:</strong> 123 Food Street, City Name</li>
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Email:</strong> contact@restaurant.com</li>
              <li><strong>Hours:</strong> Mon–Sun: 10:00 AM – 11:00 PM</li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col xs={12} sm={6} md={4}>
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <ul className="list-unstyled small">
              <li><a className="text-light text-decoration-none d-flex align-items-center" href="https://www.facebook.com"><FaFacebook className="me-2" />Facebook</a></li>
              <li><a className="text-light text-decoration-none d-flex align-items-center" href="https://twitter.com"><BsTwitter className="me-2" />Twitter</a></li>
              <li><a className="text-light text-decoration-none d-flex align-items-center" href="https://www.instagram.com"><FaInstagramSquare className="me-2" />Instagram</a></li>
              <li><a className="text-light text-decoration-none d-flex align-items-center" href="https://www.whatsapp.com"><FaWhatsappSquare className="me-2" />WhatsApp</a></li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col xs={12} sm={6} md={4}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><Link className="text-light text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
              <li><Link className="text-light text-decoration-none" to="/menu">Menu</Link></li>
              <li><Link className="text-light text-decoration-none fw-bold d-inline-block mt-2" to="/signup">Sign Up</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-4 bg-light" />

        {/* Bottom Bar */}
        <div className="text-center pb-3 small text-light">
          <span><Link to="/privacy-policy" className="text-decoration-none text-light">Privacy Policy</Link></span>
          <span className="mx-2">|</span>
          <span><Link to="/terms" className="text-decoration-none text-light">Terms & Conditions</Link></span>
          <p className="mt-2 mb-0">© 2024 <strong>SPICE & SIZZLE</strong>. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
