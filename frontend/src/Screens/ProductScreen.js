import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'

import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'



const ProductScreen = () => {

  const [qty, setQty] = useState(0);
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails

  // hook
  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (<Loader />) 
        : error ? (<Message variant='danger'>{error}</Message>)
        : (
      <Container fluid>
      <Row>
      
        <Col md={3}>
          <Row>
            <Image src={product.image} alt={product.name} fluid />
          </Row>

          <Row>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {oroduct.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.ticketsStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) =>(
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          </Row>
        </Col>
        

        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
      
            <ListGroup.Item>by {product.organizer}</ListGroup.Item>

            <ListGroup.Item>{product.description}</ListGroup.Item>

            <ListGroup.Item><strong>When:</strong> 
              <br/>{product.date} at {product.time}</ListGroup.Item>

            <ListGroup.Item><strong>Where:</strong> 
              <br/>{ReactHtmlParser(product.location)}</ListGroup.Item>

            <ListGroup.Item><strong>Tickets: <h4>${product.price}</h4></strong></ListGroup.Item>
          </ListGroup>
        </Col>

      </Row>
      </Container>)}
    </>
  )

}

export default ProductScreen