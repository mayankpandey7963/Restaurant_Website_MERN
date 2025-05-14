import React, { useEffect, useState } from "react";
import {Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import FoodCard from "../Components/FoodCard";
import SearchBar from "../Components/SearchBar";



const Menu = () => {

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


 
  return (  
    <>
      <Container fluid>
        <Row className="mx-1 my-4">
          {/* Left_section */}
          <Col xs={4}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fast Food</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Sandwiches</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Desserts</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Beverages</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Indian Cuisine</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Sandwiches</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>Chinese Cuisine</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>Italian Cuisine</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Sandwiches</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>Mexican Cuisine</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fried Chicken</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Nachos</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Shawarma</ListGroup.Item>
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>Street Food</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Burgers</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Fries</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Pizza</ListGroup.Item>
                    <ListGroup.Item className="mb-2 border border-1 border-dark rounded" action >Hot Dogs</ListGroup.Item>
                    
                  </ListGroup>
                  
                </Accordion.Body>
              </Accordion.Item>



            </Accordion>
          </Col>

          {/* Right_section */}
          <Col xs={8}>
           
            <SearchBar onSearch={handleSearch}/>

            <Row>
              {filteredProducts.map((item) => (
                <Col lg={4} key={item.id}>
                  <FoodCard
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                    description={item.description}
                    imgSrc={item.imgSrc}
                  />
                </Col>
              ))}
            </Row>

            <Row className="mb-4">
              <Col lg={4}>
                <FoodCard
                  title="French Fries"
                  price="3.99"
                  discount="20"
                  description="Crispy and delicious fries, a perfect snack!"
                  imgSrc={`/Foods/French_Fries.jpg`}
                />
              </Col>

              <Col lg={4}>
              <FoodCard 
                title="Fried Chicken"
                price="9.99"
                discount="20"
                description="Juicy, crispy, and flavorful fried chicken!"
                imgSrc={`/Foods/Fried Chicken.jpeg`}
              />
              </Col>

              <Col lg={4}>
              <FoodCard
                title="Cheese Pizza"
                price="12.49"
                discount="10"
                description="Hot and cheesy pizza with a crunchy crust."
                imgSrc="/Foods/Cheese_Pizza.jpg"
              />
              </Col>

            </Row>


            <Row className="mb-4">
              <Col lg={4}>
              <FoodCard
                title="Burger"
                price="6.99"
                discount="25"
                description="A classic cheeseburger with fresh lettuce and tomatoes."
                imgSrc="/Foods/Burger.jpg"
              />
              </Col>

              <Col lg={4}>
              <FoodCard
                title="Pasta"
                price="8.99"
                discount="18"
                description="Creamy Alfredo pasta topped with grilled chicken."
                imgSrc="/Foods/Pasta.jpg"
              />
              </Col>

              <Col lg={4}>
              <FoodCard
                title="Ice Cream"
                price="4.99"
                discount="12"
                description="Rich and creamy vanilla ice cream with chocolate syrup."
                imgSrc="/Foods/ice-cream.jpg"
              />
              </Col>

            </Row>

            <Row>
              <Col lg={4}>
                <FoodCard
                title="Paneer Roll"
                price="4.99"
                discount="12"
                description="Relish our soft and spicy Paneer Roll, packed with vibrant flavors and fresh ingredients."
                imgSrc="/Foods/paneer_roll.jpeg"
              />
              </Col>


              <Col lg={4}>
                <FoodCard
                title="Thali"
                price="8.79"
                discount="12"
                description=" Dive into our thali, perfectly crispy on the outside and fluffy on the inside."
                imgSrc="/Foods/thali.jpeg"
              />
              </Col>

              <Col lg={4}>
                <FoodCard
                  title="Vegan Wraps"
                  price="8.79"
                  discount="10"
                  description="Relish our soft and spicy Paneer Roll, packed with vibrant flavors and fresh ingredients."
                  imgSrc="/Foods/vegan_wraps.jpeg"
                />
              </Col>

            </Row>

          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer/>



    </>
  );
};

export default Menu;
