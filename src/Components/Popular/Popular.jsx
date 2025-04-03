import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Popular.css';
import data_product from '../Assets/data.js';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div>
            <section className="popular">
                <Container>
                    <Row>
                        <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="text-center mb-5 mt-5">
                            <h2>POPULAR IN AROUSE</h2>
                            <div className="para">
                            <p><i class="bi bi-balloon-heart-fill"></i>Unique accessories that make you shine in every moment<i class="bi bi-balloon-heart-fill"></i></p>
                            <p><i class="bi bi-brightness-high-fill"></i>Discover the featured products - a fashion trend you can't miss!<i class="bi bi-brightness-high-fill"></i></p>
                            </div>
                        </Col> 
                    </Row>
                    <Row>
                        {data_product.map((item, i) => {
                            return <Item 
                            key={i}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            old_price={item.old_price}
                            new_price={item.new_price}
                            />
                        })}
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Popular
