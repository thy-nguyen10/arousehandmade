// import React from 'react';
// import './ProductDisplay.css';
// import { Col, Container, Row } from 'react-bootstrap';

// const ProductDisplay = (props) => {
//     const { product } = props;
//     return (
//         <section className='productdisplay'>
//             <Container>
//                 <Row>
//                     <Col lg={7}>
//                         <div className="productdisplay-left">
//                             <div className="productdisplay-img-list">
//                                 <img src={product.image} alt="" />
//                                 <img src={product.image} alt="" />
//                                 <img src={product.image} alt="" />
//                                 <img src={product.image} alt="" />
//                             </div>
//                             <div className="productdisplay-img">
//                                 <img className='productdisplay-main-img' src={product.image} alt="" />
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={5}>
//                         <div className="productdisplay-right">
//                             <h1>{product.name}</h1>
//                             <div className="productdisplay-right-sold">
//                                 <h5>Sold: 122</h5>
//                             </div>
//                             <div className="productdisplay-right-prices">
//                                 <div className="productdisplay-right-price-old">${product.old_price}</div>
//                                 <div className="productdisplay-right-price-new">${product.new_price}</div>
//                             </div>
//                             <div className="productdisplay-right-description">
//                                 Them description gi do di be nam :333333
//                             </div>
//                             {/* <div className="productdisplay-right-size">
//                                 <h1>Select Size</h1>
//                                 <div className="productdisplay-right-sizes">
//                                     <div>S</div>
//                                     <div>M</div>
//                                     <div>L</div>
//                                     <div>XL</div>
//                                     <div>XXL</div>
//                                 </div>
//                             </div> */}
//                             <button>ADD TO CART</button>
//                             <p className='productdisplay-right-category'><span>Category: </span>Bracelet, Necklace</p>
//                             <p className='productdisplay-right-category'><span>Tags: </span>Modern, Lastest</p>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }

// export default ProductDisplay

import React, { useContext } from "react";
import './ProductDisplay.css';
import { Container, Row, Col, Button, Breadcrumb, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <section className="productdisplay">
            <Container className="py-5">
                {/* Breadcrumb Navigation */}
                <Breadcrumb className="custom-breadcrumb mb-0">
                    <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to={`/${product.category}`}>{product.category}</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                </Breadcrumb>

                <Row className="align-items-stretch">
                    {/* Product Image Carousel*/}
                    <Col md={7} className="d-flex flex-column h-100">
                        <Carousel className="flex-grow-1">
                            <Carousel.Item>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="img-fluid rounded shadow-sm"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    {/* Product Details */}
                    <Col md={5} className="d-flex flex-column h-100 pt-1">
                        <div className="flex-grow-1 productdisplay-right">
                            <h2 className="fw-bold">{product.name}</h2>
                            <p className="text-muted">
                                {product.description}
                            </p>
                            <p className="text-muted">
                                Tags: ArouseHandmade, Bracelet, Necklace.
                            </p>
                            <div className="d-flex align-items-center my-2">
                                <span className="fw-bold product-sold mt-3">Sold: {product.sold}</span>
                            </div>
                            <h4 className="fw-bold">
                                {product.new_price} <span className="text-muted text-decoration-line-through ms-2">{product.old_price}</span>
                            </h4>
                            <div className="my-3 d-flex align-items-center">
                                <Button variant="dark" className="me-4 px-4 py-2" onClick={()=>{addToCart(product.id)}}>
                                    ADD TO CART
                                </Button>
                                <Button variant="danger" className="me-4 px-4 py-2">
                                    BUY NOW
                                </Button>
                                <i class="bi bi-heart text-danger"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductDisplay;

