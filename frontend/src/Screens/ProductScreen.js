import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                by <strong>{product.organizer}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>When:</strong>
                <br />
                {product.date} at {product.time}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Where:</strong>
                <br />
                {ReactHtmlParser(product.location)}
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.ticketsStock > 0 ? 'Tickets Available' : 'Sold Out'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.ticketsStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.ticketsStock).keys()].map((x) => (
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
                    disabled={product.ticketsStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}
        
export default ProductScreen