import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div>
        <section className="new_collection">
            <Container>
                <Row>
                    <Col xs={12} sm={10} md={8} lg={{span: 8, offset: 2}} className="text-center mb-5 mt-3">
                        <h2>NEW COLLECTIONS</h2>
                        <div className="slogan_collection">
                            <p><i class="bi bi-stars"></i> Arouse Handmade - Handcrafted Wonders <i class="bi bi-stars"></i></p>
                            <p><i class="bi bi-flower3"></i>Exquisite craftsmanship - Shine in your own way! <i class="bi bi-flower3"></i></p>
                        </div> 
                    </Col>
                </Row>
                <Row>
                    {new_collection.map((item, i) => {
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

export default NewCollections
