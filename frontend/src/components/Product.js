import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' className="text-center">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div id='organizer' className="text-center">by {product.organizer}</div>
                    <br></br>
                    <Row>
                        <Col md="3">
                            <div id='dateLabel'><strong className='text-nowrap'>Date:</strong></div>
                        </Col> 
                        <Col>
                            <div id='dateDisplay'>{product.date}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <div id='timeLabel'><strong className='text-nowrap'>Time:</strong></div>
                        </Col>
                        <Col>
                            <div id='timeDisplay'>{product.time}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <div id='locationLabel'><strong className='text-nowrap'>Location:</strong></div>
                        </Col>
                        <Col>
                            <div id='locationDisplay'>{ReactHtmlParser(product.location)}</div>
                        </Col>
                    </Row>
                    <br></br>
                    <div id='categories'>{product.categories.map((p) => " [" + p + "]")}</div>
                </Card.Text>
                        
                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
