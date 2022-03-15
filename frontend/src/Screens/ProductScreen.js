import React, { useState, useEffect } from 'react' //k: added useState, useEffect
import axios from 'axios' //k: added axios
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'



const ProductScreen = () => {
  const params = useParams(); //k: added useState, useEffect, axios - hook
  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <div>ProductScreen</div>
  ) 
}

export default ProductScreen