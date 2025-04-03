import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
    const { addToCart, formatVND } = useContext(ShopContext);
    return (
        <Col sm={6} lg={4} xl={3} className='mb-4'>
            <Card className="overflow-hidden">
                <div className="overflow-hidden">
                    <Link to={`/product/${props.id}`}><Card.Img onClick={window.scrollTo(0,0)} variant="top" src={props.image} /></Link>
                </div>
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="item_sold">Sold: </div>
                        <div className="wishlist">
                            <i class='bi bi-heart'></i>
                        </div>
                    </div>

                    <Card.Title className='h6'>{props.name}</Card.Title>
                    <Card.Text>
                        {formatVND(props.old_price)}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="menu_price">
                            <h6 className='mb-0 mt-0'>{formatVND(props.new_price)}</h6>
                        </div>
                        <div className="add_to_card">
                            <Link to='/cart' onClick={()=>{addToCart(props.id)}}>
                                <i class='bi bi-bag me-2'></i>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
