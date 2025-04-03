import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/Logo_Arouse.png';
import './Header.css';
import { ShopContext } from '../../Context/ShopContext';

const Header = () => {
    const location = useLocation();
    const [menu, setMenu] = useState('shop');
    const [nav, setNav] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    useEffect(() => {
        if (location.pathname === '/') {
            setMenu('shop');
        } else if (location.pathname.startsWith('/necklaces')) {
            setMenu('necklaces');
        } else if (location.pathname.startsWith('/bracelets')) {
            setMenu('bracelets');
        } else if (location.pathname.startsWith('/cart')) {
            setMenu('cart');
        } else if (location.pathname.startsWith('/login')) {
            setMenu('login');
        }
    }, [location.pathname]);

    // Handle scroll to add sticky class
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        setNav(scrollValue > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeValueOnScroll);
        return () => window.removeEventListener('scroll', changeValueOnScroll);
    }, []);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className={`${nav ? 'sticky' : ''}`}>
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className="logo">
                            <img src={logo} alt='Logo' className="img-fluid" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/' onClick={() => setMenu('shop')}>
                                Shop
                                <hr className={menu === 'shop' ? 'underline' : ''} />
                            </Nav.Link>
                            <Nav.Link as={Link} to='/necklaces' onClick={() => setMenu('necklaces')}>
                                Necklace
                                <hr className={menu === 'necklaces' ? 'underline' : ''} />
                            </Nav.Link>
                            <Nav.Link as={Link} to='/bracelets' onClick={() => setMenu('bracelets')}>
                                Bracelet
                                <hr className={menu === 'bracelets' ? 'underline' : ''} />
                            </Nav.Link>
                            <Nav.Link as={Link} to='/login' onClick={() => setMenu('login')}>
                                Login
                                <hr className={menu === 'login' ? 'underline' : ''} />
                            </Nav.Link>
                            <Nav.Link as={Link} to='/cart' onClick={() => setMenu('cart')}>
                                <div className="cart">
                                    <i className="bi bi-bag fs-5"></i>
                                    <em className="roundpoint">{getTotalCartItems()}</em>
                                </div>
                                <hr className={menu === 'cart' ? 'underline' : ''} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
