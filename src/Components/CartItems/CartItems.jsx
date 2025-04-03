// import React, { useContext } from 'react';
// import { Container, Row, Col, Table, Button, Form, Card } from 'react-bootstrap';
// import { ShopContext } from '../../Context/ShopContext';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './CartItems.css';

// const CartItems = () => {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartItem, formatVND } = useContext(ShopContext);

//     return (
//         <section className='cartitems'>
//             <Container className='py-5 '>
//                 <h2 className='text-center mb-4'>Your Shopping Cart</h2>
//                 <Table responsive bordered hover className='text-center align-middle shadow-sm'>
//                     <thead className='table-dark'>
//                         <tr className='cartitems-title'>
//                             <th>Product</th>
//                             <th>Title</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {all_product.map((product) => {
//                             const quantity = cartItems[product.id] || 0;
//                             if (quantity > 0) {
//                                 return (
//                                     <tr key={product.id}>
//                                         <td>
//                                             <img src={product.image} alt={product.name} className='img-thumbnail' style={{ width: '60px', height: '60px' }} />
//                                         </td>
//                                         <td>{product.name}</td>
//                                         <td>{formatVND(product.new_price.toFixed(2))}</td>
//                                         <td>
//                                             <Button
//                                                 variant='outline-secondary'
//                                                 size='sm'
//                                                 className='fw-bold me-2'
//                                                 onClick={() => updateCartItem(product.id, quantity - 1)}
//                                                 disabled={quantity <= 1}
//                                             >−</Button>

//                                             <span className='fw-bold'>{quantity}</span>

//                                             <Button
//                                                 variant='outline-secondary'
//                                                 size='sm'
//                                                 className='fw-bold ms-2'
//                                                 onClick={() => updateCartItem(product.id, quantity + 1)}
//                                                 disabled={quantity >= 10}
//                                             >+</Button>
//                                         </td>
//                                         <td>{formatVND((product.new_price * quantity).toFixed(2))}</td>
//                                         <td>
//                                             <Button variant='danger' size='sm' onClick={() => removeFromCart(product.id)}>
//                                                 <i className='bi bi-trash'></i>
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 );
//                             }
//                             return null;
//                         })}
//                     </tbody>
//                 </Table>

//                 <Row className='mt-4'>
//                     <Col md={6}>
//                         <Card className='shadow-sm p-3'>
//                             <Card.Body>
//                                 <Card.Title>Cart Totals</Card.Title>
//                                 <div className='d-flex justify-content-between'>
//                                     <p>Subtotal</p>
//                                     <p>{formatVND(getTotalCartAmount().toFixed(2))}</p>
//                                 </div>
//                                 <hr />
//                                 <div className='d-flex justify-content-between'>
//                                     <p>Shipping Fee</p>
//                                     <p className='text-success'>Free</p>
//                                 </div>
//                                 <hr />
//                                 <div className='d-flex justify-content-between fw-bold'>
//                                     <h5>Total</h5>
//                                     <h5>{formatVND(getTotalCartAmount().toFixed(2))}</h5>
//                                 </div>
//                                 <Button variant='primary' className='w-100 mt-3'>Proceed to Checkout</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col md={6}>
//                         <Card className='shadow-sm p-3'>
//                             <Card.Body>
//                                 <Card.Title>Promo Code</Card.Title>
//                                 <p>If you have a promo code, enter it below.</p>
//                                 <Form className='d-flex'>
//                                     <Form.Control type='text' placeholder='Enter promo code' className='me-2' />
//                                     <Button variant='success'>Apply</Button>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default CartItems;
import React, { useContext } from 'react';
import { Container, Row, Col, Table, Button, Form, Card } from 'react-bootstrap';
import { ShopContext } from '../../Context/ShopContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CartItems.css';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartItem, formatVND } = useContext(ShopContext);

    return (
        <section className='cartitems'>
            <Container className='py-5'>
                <h2 className='text-center mb-4'>Your Shopping Cart</h2>
                <div className='table-responsive'>
                    <Table bordered hover className='text-center align-middle shadow-sm'>
                        <thead className='table-dark'>
                            <tr className='cartitems-title'>
                                <th>Product</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_product.map((product) => {
                                const quantity = cartItems[product.id] || 0;
                                if (quantity > 0) {
                                    return (
                                        <tr key={product.id}>
                                            <td>
                                                <img src={product.image} alt={product.name} className='img-thumbnail cart-img' />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{formatVND(product.new_price.toFixed(2))}</td>
                                            <td>
                                                <Button
                                                    variant='outline-secondary'
                                                    size='sm'
                                                    className='fw-bold me-2'
                                                    onClick={() => updateCartItem(product.id, quantity - 1)}
                                                    disabled={quantity <= 1}
                                                >−</Button>
                                                <span className='fw-bold'>{quantity}</span>
                                                <Button
                                                    variant='outline-secondary'
                                                    size='sm'
                                                    className='fw-bold ms-2'
                                                    onClick={() => updateCartItem(product.id, quantity + 1)}
                                                    disabled={quantity >= 10}
                                                >+</Button>
                                            </td>
                                            <td>{formatVND((product.new_price * quantity).toFixed(2))}</td>
                                            <td>
                                                <Button variant='danger' size='sm' onClick={() => removeFromCart(product.id)}>
                                                    <i className='bi bi-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </Table>
                </div>

                <Row className='mt-4'>
                    <Col xs={12} md={6} className='mb-4'>
                        <Card className='shadow-sm p-3'>
                            <Card.Body>
                                <Card.Title>Cart Totals</Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <p>Subtotal</p>
                                    <p>{formatVND(getTotalCartAmount().toFixed(2))}</p>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p>Shipping Fee</p>
                                    <p className='text-success'>Free</p>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between fw-bold'>
                                    <h5>Total</h5>
                                    <h5>{formatVND(getTotalCartAmount().toFixed(2))}</h5>
                                </div>
                                <Button className='w-100 mt-3 proceed-btn'>Proceed to Checkout</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6}>
                        <Card className='shadow-sm p-3'>
                            <Card.Body>
                                <Card.Title>Promo Code</Card.Title>
                                <p>If you have a promo code, enter it below.</p>
                                <Form className='d-flex'>
                                    <Form.Control type='text' placeholder='Enter promo code' className='me-2' />
                                    <Button variant='success'>Apply</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CartItems;
