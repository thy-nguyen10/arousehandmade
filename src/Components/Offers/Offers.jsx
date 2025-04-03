import React from 'react';
import './Offers.css';
import offers_image from '../Assets/offers_image.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Offers = () => {
  return (
    <div className="offers">
      {/* <div className="offers-left">
        <h1>
            Exclusive
        </h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offers_image} alt="" />
      </div> */}
      <section>
        <Container>
          <Row>
            <Col className='offers-left'>
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>ONLY ON BEST SELLERS PRODUCTS</p>
              <button>Check Now</button>
            </Col>
            <Col className='offers-right'>
              <img src={offers_image} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Offers
