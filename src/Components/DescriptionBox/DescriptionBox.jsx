// import React, { useState } from 'react';
// import './DescriptionBox.css';
// import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';

// const DescriptionBox = () => {
//     const [reviews, setReviews] = useState([
//         { name: "John Doe", rating: 5, comment: "Absolutely beautiful! The quality is amazing." }
//     ]);
//     const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

//     const handleInputChange = (e) => {
//         setNewReview({ ...newReview, [e.target.name]: e.target.value });
//     };

//     const handleRatingChange = (e) => {
//         setNewReview({ ...newReview, rating: parseInt(e.target.value) });
//     };

//     const handleAddReview = () => {
//         if (newReview.name && newReview.comment) {
//             setReviews([newReview, ...reviews]);
//             setNewReview({ name: "", rating: 5, comment: "" });
//         }
//     };

//     return (
//         <div className='descriptionbox'>
//             <Container>
//                 <Row className="mt-5">
//                     <Col>
//                         <h3 className="fw-bold">Customer Reviews</h3>

//                         {/* Form Thêm Bình Luận */}
//                         <Card className="shadow-sm p-3 mb-4">
//                             <Form>
//                                 <Form.Group className="mb-2">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control 
//                                         type="text" 
//                                         name="name" 
//                                         value={newReview.name} 
//                                         onChange={handleInputChange} 
//                                         placeholder="Your name" 
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="mb-2">
//                                     <Form.Label>Rating</Form.Label>
//                                     <Form.Select value={newReview.rating} onChange={handleRatingChange}>
//                                         {[1, 2, 3, 4, 5].map(num => (
//                                             <option key={num} value={num}>{num} Stars</option>
//                                         ))}
//                                     </Form.Select>
//                                 </Form.Group>

//                                 <Form.Group className="mb-2">
//                                     <Form.Label>Comment</Form.Label>
//                                     <Form.Control 
//                                         as="textarea" 
//                                         name="comment" 
//                                         value={newReview.comment} 
//                                         onChange={handleInputChange} 
//                                         rows={3} 
//                                         placeholder="Write your review..." 
//                                     />
//                                 </Form.Group>

//                                 <Button variant="primary" onClick={handleAddReview}>Submit Review</Button>
//                             </Form>
//                         </Card>

//                         {/* Hiển thị danh sách bình luận */}
//                         {reviews.map((review, index) => (
//                             <Card key={index} className="shadow-sm p-3 mb-3">
//                                 <Row>
//                                     <Col md={1} className="text-center">
//                                         <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle" />
//                                     </Col>
//                                     <Col>
//                                         <h5 className="mb-1">{review.name}</h5>
//                                         <div className="d-flex">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <i key={i} className={i < review.rating ? "bi bi-star-fill text-warning" : "bi bi-star star-empty"}></i>
//                                             ))}
//                                         </div>
//                                         <p className="text-muted mt-2">{review.comment}</p>
//                                     </Col>
//                                 </Row>
//                             </Card>
//                         ))}
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default DescriptionBox;
import React, { useState } from 'react';
import './DescriptionBox.css';
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';

const initialReviews = [
    { 
        name: "Alice Johnson", 
        avatar: "https://i.pinimg.com/736x/bf/91/f0/bf91f083f6d50be1b5259e2335fc265f.jpg",
        rating: 5, 
        comment: "Sản phẩm tuyệt vời, chất lượng rất tốt!",
        date: new Date().toLocaleString()
    },
    { 
        name: "Michael Smith", 
        avatar: "https://i.pinimg.com/736x/ee/69/4e/ee694e2d65f9b847e4f852441109e62f.jpg",
        rating: 4, 
        comment: "Hàng đẹp nhưng giao hơi chậm.",
        date: new Date().toLocaleString()
    }
];

const DescriptionBox = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newComment, setNewComment] = useState("");
    const [newRating, setNewRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === "") return;

        const newReview = {
            name: "Người dùng mới",
            avatar: "https://via.placeholder.com/50",
            rating: newRating,
            comment: newComment,
            date: new Date().toLocaleString() // Lưu thời gian bình luận
        };

        setReviews([newReview, ...reviews]);
        setNewComment("");
        setNewRating(5);
    };

    return (
        <div className='descriptionbox'>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h3 className="fw-bold">Customer Reviews</h3>

                        {/* Danh sách bình luận */}
                        {reviews.map((review, index) => (
                            <Card key={index} className="shadow-sm p-3 mb-3">
                                <Row>
                                    <Col md={1} className="text-center">
                                        <img src={review.avatar} alt="User" className="rounded-circle" />
                                    </Col>
                                    <Col>
                                        <h5 className="mb-1">{review.name}</h5>
                                        <div className="d-flex">
                                            {[...Array(5)].map((_, i) => (
                                                <i 
                                                    key={i} 
                                                    className={i < review.rating ? "bi bi-star-fill text-warning" : "bi bi-star star-empty"}
                                                ></i>
                                            ))}
                                        </div>
                                        <p className="text-muted mt-2">{review.comment}</p>
                                        <small className="text-secondary">{review.date}</small>
                                    </Col>
                                </Row>
                            </Card>
                        ))}

                        {/* Form bình luận */}
                        <Card className="shadow-sm p-3 mb-4 descriptionbox-formcomment">
                            <h5>Leave Your Review</h5>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Select Rating</Form.Label>
                                    <Form.Select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
                                        {[5, 4, 3, 2, 1].map(star => (
                                            <option key={star} value={star}>{star} ⭐</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={2} 
                                        value={newComment} 
                                        onChange={(e) => setNewComment(e.target.value)} 
                                        placeholder="Enter your review..." 
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary">Submit Review</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DescriptionBox;
