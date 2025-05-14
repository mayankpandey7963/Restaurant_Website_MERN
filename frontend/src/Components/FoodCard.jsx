import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Counter from "./Counter";

const FoodCard = ({ title, price, discount, description, imgSrc }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant="top" style={{ height: '12rem' }} src={imgSrc} />
      <Card.Body>
        <Card.Title>
          <h4>{title}</h4>
          <div className="rates">
            <strong className='pe-2 text-success'>${price}</strong>
            <small className='text-danger'>{discount}% Off</small>
          </div>
        </Card.Title>
        <Card.Text>
          <b className='text-danger'>Description: </b> {description}
        </Card.Text>
        <div className="btn_container d-flex justify-content-between">
          <Button variant='danger' className='fw-bold border-0'>
            Explore <MdKeyboardDoubleArrowRight />
          </Button>
          <Counter />
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
