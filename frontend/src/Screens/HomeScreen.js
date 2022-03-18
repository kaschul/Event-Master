import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {

  // hook
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1> Events </h1>
      <Row>
        {products.map((product) => (                                  /* bind array of prod to html. map is for loop "for each product" lets call output product which is the map variable.*/

          <Col key={product._id} sm={12} md={6} lg={4} lx={3}>         
            <Product product={product} /> 
          </Col>
                                                                      /* two statements above: in Product comp, the product parameter comes from above output "product" which is the map variable*/
        ))}
      </Row>
    </> 
  )
  }

export default HomeScreen



