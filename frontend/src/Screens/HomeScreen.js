import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'

import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'



const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1> Events </h1>
      {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) :
      (<Row>
        {products.map((product) => (                                  /* bind array of prod to html. map is for loop "for each product" lets call output product which is the map variable.*/

          <Col key={product._id} sm={12} md={6} lg={4} lx={3}>         
            <Product product={product} /> 
          </Col>
                                                                      /* two statements above: in Product comp, the product parameter comes from above output "product" which is the map variable*/
        ))}
      </Row>)}
    </> 
  )
  
}

export default HomeScreen



