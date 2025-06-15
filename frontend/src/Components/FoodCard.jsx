import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Counter from "./Counter";

const FoodCard = ({ title, price, discount, description, imgSrc }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        style={{ height: '12rem', objectFit: 'cover', borderRadius: '0.5rem 0.5rem 0 0' }}
        src={imgSrc}
      />
    
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title as="h5" className="mb-2 text-dark fw-semibold">{title}</Card.Title>
      
          <div className="mb-2">
            <span className="text-success fw-bold me-2">&#8377;{price}</span>
            <span className="text-muted small">{discount}% Off</span>
          </div>
      
          <Card.Text className="text-secondary small">
            {description}
          </Card.Text>
        </div>
      
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button variant="outline-primary" size="sm" className="fw-medium px-3">
            Explore <MdKeyboardDoubleArrowRight />
          </Button>
          <Counter />
        </div>
      </Card.Body>
    </Card>

  );
};

export default FoodCard;
