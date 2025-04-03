// import React from 'react';
// import '../Hero/Hero.css';
// import hand_icon from '../Assets/logo_hero.png';
// import arrow_icon from '../Assets/arrow.png';
// import hero_image from '../Assets/hero_image.png';
// import hero_image_1 from '../Assets/hero_slider1.png';
// import hero_image_2 from '../Assets/hero_slider2.png';
// import { motion } from "framer-motion";
// import { Carousel, Col, Container, Row } from 'react-bootstrap';

// const Hero = () => {
//     const text = "WELCOME TO AROUSE".split("");
//     const animatedText = (text) => (
//         <span style={{ display: "inline-flex" }}>
//             {text.split("").map((char, index) => (
//                 <motion.span
//                     key={index}
//                     animate={{ y: [-5, 5, -5, 0] }}
//                     transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                         repeatDelay: 1,
//                         delay: index * 0.1,
//                         ease: "easeInOut"
//                     }}
//                     style={{ display: "inline-block", marginRight: "2px" }}
//                 >
//                     {char}
//                 </motion.span>
//             ))}
//         </span>
//     );

//     return (
//         <div>
//             <section className='hero'>
//                 <Container>
//                     <Row>
//                         <Col className='hero-left'>
//                             <h2>
//                                 {text.map((letter, index) => (
//                                     <motion.span
//                                         key={index}
//                                         initial={{ y: -100, opacity: 0 }}
//                                         animate={{ y: 0, opacity: 1 }}
//                                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                                         className="drop-letter"
//                                     >
//                                         {letter}
//                                     </motion.span>
//                                 ))}
//                             </h2>
//                             <div>
//                                 <div className="hero-hand-icon">
//                                     <p>{animatedText("new")}</p>
//                                     <motion.img
//                                         src={hand_icon}
//                                         alt='Rotating Icon'
//                                         animate={{ rotate: [0, 360, 360] }}
//                                         transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
//                                     />
//                                 </div>
//                                 <p>{animatedText("collections")}</p>
//                                 <p>{animatedText("for everyone")}</p>
//                             </div>
//                             <div className="hero-lastest-btn btn_red">
//                                 <div>Lastest Collection</div>
//                                 <img src={arrow_icon} alt="" />
//                             </div>
//                         </Col>
//                         <Col className='hero-right'>
//                             <Carousel className='text-center'>
//                                 <Carousel.Item>
//                                     <img
//                                         src={hero_image}
//                                         alt="First slide"
//                                     />
//                                 </Carousel.Item>
//                                 <Carousel.Item>
//                                     <img
//                                         src={hero_image_1}
//                                         alt="Second slide"
//                                     />
//                                 </Carousel.Item>
//                                 <Carousel.Item>
//                                     <img
//                                         src={hero_image_2}
//                                         alt="Third slide"
//                                     />
//                                 </Carousel.Item>
//                             </Carousel>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// }

// export default Hero;

import React from 'react';
import '../Hero/Hero.css';
import hand_icon from '../Assets/logo_hero.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import hero_image_1 from '../Assets/hero_slider1.png';
import hero_image_2 from '../Assets/hero_slider2.png';
import { motion } from "framer-motion";
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    const text = "WELCOME TO AROUSE".split("");
    const animatedText = (text) => (
        <span style={{ display: "inline-flex" }}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    animate={{ y: [-5, 5, -5, 0] }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: index * 0.1,
                        ease: "easeInOut"
                    }}
                    style={{ display: "inline-block", marginRight: "2px" }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );

    return (
        <div>
            <section className='hero'>
                <Container>
                    <Row className="gy-4"> {/* Thêm class gy-4 để tạo khoảng cách giữa các hàng khi stack trên mobile */}
                        <Col lg={6} md={12} className='hero-left'>
                            <h2>
                                {text.map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="drop-letter"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h2>
                            <div>
                                <div className="hero-hand-icon">
                                    <p>{animatedText("new")}</p>
                                    <motion.img
                                        src={hand_icon}
                                        alt='Rotating Icon'
                                        animate={{ rotate: [0, 360, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
                                    />
                                </div>
                                <p>{animatedText("collections")}</p>
                                <p>{animatedText("for everyone")}</p>
                            </div>
                            <div className="hero-lastest-btn btn_red">
                                <div>Lastest Collection</div>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='hero-right'>
                            <Carousel className='text-center'>
                                <Carousel.Item>
                                    <img
                                        src={hero_image}
                                        alt="First slide"
                                        className="img-fluid" // Thêm class img-fluid để hình ảnh responsive
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src={hero_image_1}
                                        alt="Second slide"
                                        className="img-fluid" // Thêm class img-fluid để hình ảnh responsive
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src={hero_image_2}
                                        alt="Third slide"
                                        className="img-fluid" // Thêm class img-fluid để hình ảnh responsive
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Hero;