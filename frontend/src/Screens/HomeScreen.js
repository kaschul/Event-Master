import React from 'react'
import Product from '../components/Product'
import products from '../products'
import {Row, Col} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <h1> Events </h1>
      <Row>
        {products.map((product) => (                                  /* bind array of prod to html. map is for loop "for each product" lets call it product*/

          <Col key={product._id} sm={12} md={6} lg={4} lx={3}>          /* in each row product displayed as a column*/
            <Product product={product} />
          </Col>
      
      ))}
      </Row>
    </>
  )
  }

export default HomeScreen