import React from 'react';
import './Breadcrum.css';
import {Container, Row, Col} from 'react-bootstrap';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <section className='breadcrum'>
      <Container>
        <Row>
          <Col className="mx-4">
          HOME <i class="bi bi-chevron-right"></i> SHOP <i class="bi bi-chevron-right"></i> {product.category} <i class="bi bi-chevron-right"></i> {product.name}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Breadcrum
