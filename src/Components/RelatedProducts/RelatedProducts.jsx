import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { Col, Container, Row } from 'react-bootstrap';

const RelatedProducts = () => {
    return (
        <section className='relatedproducts'>
           <Container>
                    <Row>
                        <Col xs={12} sm={10} md={8} lg={{ span: 8, offset: 2 }} className="text-center mb-5 mt-5">
                            <h2>Related Products</h2>
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
    )
}

export default RelatedProducts
