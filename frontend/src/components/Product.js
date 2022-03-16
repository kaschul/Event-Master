import React from 'react'
import { Card } from 'react-bootstrap'
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
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div id='organizer'>by {product.organizer}</div>
                    <br />
                    <Card.Subtitle>Event Details</Card.Subtitle>
                    <div id='date'><strong>Date:</strong> {product.date}</div> 
                    <div id='time'><strong>Time:</strong> {product.time}</div>
                    <div id='location'><strong>Location:</strong> {ReactHtmlParser(product.location)}</div>
                    <br></br>
                    <div id='categories'>{product.categories.map((p) => " " + p)}</div>
                </Card.Text>
                        
                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product

/* ex:  _id: '4',
        name: 'The Wednesday Comedy Show',
        organizer: 'Seattle City Improv',
        image: '/event-images/wednesdaycomedyshow.jpg',
        description: "Located at Pike Place Market, Seattle City Improv is consistently voted one of the top comedy clubs in Seattle.",
        date: 'March 23, 2022',
        time: '1pm',
        location: ['Pike Place Market', '85 Pike St', 'Seattle, WA'],
        price: 20,
        ticketsStock: 80,
        categories: ['comedy', '21+', 'Seattle, WA']
*/