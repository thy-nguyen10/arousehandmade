import React from 'react';
import './Footer.css';
import logo_footer from '../Assets/logo_hero.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import logo_tomato from '../Assets/Logo_Arouse_Tomato - Copy.png';
import logo_gold from '../Assets/Logo_Arouse_Goldenrod.png';
import logo_oldlace from '../Assets/Logo_Arouse_Oldlace_02.png';
import logo_blue from '../Assets/Logo_Arouse_Lightblue - Copy.png';
import logo_wheat from '../Assets/Logo_Arouse_Wheat - Copy.png';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-image">
                            <img src={logo_footer} alt="" />
                            <img src={logo_blue} alt="" />
                            <img src={logo_tomato} alt="" />
                            <img src={logo_gold} alt="" />
                            <img src={logo_wheat} alt="" />
                            <img src={logo_oldlace} alt="" />
                        </div>
                        
                    </Col>
                </Row>
                <Row className='text-center'>
                <h2>AROUSE HANDMADE</h2>
                </Row>
            </Container>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p><i class="bi bi-c-circle"></i> Copyright Arouse. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
