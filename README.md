# EventMaster 

- Ecommerce App
- MongoDB, Express, React, Node
- deployed to heroku at
https://fierce-badlands-94639.herokuapp.com/

## Homepage
- Homepage shows a list of events
- Header contains navigation to Homepage, Cart, and Login (changed to User Profile when logged into a user account)
```js
  {userInfo ? (
    <NavDropdown title={userInfo.name} id='username'>
      <LinkContainer to='/profile'>
        <NavDropdown.Item> Portal to Account </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}> Logout </NavDropdown.Item>
    </NavDropdown>
  ) : (
    <LinkContainer to='/login'>
      <Nav.Link><i className='fa-solid fa-bullseye'></i> Sign In </Nav.Link>
    </LinkContainer>
  )}
```
- Uses Redux store to manage state
```js
  const productList = useSelector((state) => state.productList)
```
- Product data hosted on MongoDB and mapped to homepage on load
```js
  {products.map((product) => (
    <Col key={product._id} sm={12} md={6} lg={4} lx={3}>
      <Product product={product} />
    </Col>
  ))}
```
![eventmaster1](https://user-images.githubusercontent.com/47723396/183946341-d0a7fc70-47e5-4927-b3b1-84dd9799b541.JPG)

## Product details
- Product details page shows the details of an event and lets you add tickets to the event to your cart
- If no tickets are availabe, 'Add to Cart' button is disabled
```js
  <Button
    className='btn-block'
    type='button'
    onClick={addToCartHandler}
    disabled={product.ticketsStock === 0}
  >
```
![eventmaster2](https://user-images.githubusercontent.com/47723396/183946421-bca43c92-0e42-4cd1-9197-90c8bd2073d1.JPG)

## Cart
- Cart page shows you the products currently added to the cart and lets you proceed to checkout page
![eventmaster3](https://user-images.githubusercontent.com/47723396/183946430-6a73728d-6ed6-4047-b757-eb5c124f40fd.JPG)

## Shipping
- After signing in or creating an account, you can enter your shipping address
![eventmaster4](https://user-images.githubusercontent.com/47723396/183947909-7b171a81-8a79-462b-bc5f-bdcde6b5c1b0.JPG)

## Checkout
- Checkout is handled via PayPal integration, either with a PayPal account or a credit card
![eventmaster5](https://user-images.githubusercontent.com/47723396/183946456-21a282f7-2ae7-403e-9edc-e0ed8c4d600f.JPG)

## Order Summary
- The order summary page displays the shipping address, items ordered with quantity and price, and a total cost breakdown
![eventmaster6](https://user-images.githubusercontent.com/47723396/183946465-48905963-3cce-44cf-b83d-4630d81151c0.JPG)

## PayPal Integration
- After confirming the order, the order summary page displays the status of the order
![eventmaster7](https://user-images.githubusercontent.com/47723396/183946552-d5bb3066-52a6-4f17-896d-4208ce1dfa53.JPG)
- Payment is handled via PayPal integration
![eventmaster9](https://user-images.githubusercontent.com/47723396/183946870-225762fb-4dda-4425-932d-82666f08a2d0.JPG)

## Order Summary
- After payment is complete, the order summary page is updated
![eventmaster10](https://user-images.githubusercontent.com/47723396/183946886-1cc085ee-e606-4f0a-b49f-aca4005ec970.JPG)

## New User
- If you do not have a profile, there is an option to create a new account with the functionality to track your orders and save your shipping and payment information
![eventmaster11](https://user-images.githubusercontent.com/47723396/183946897-976d5816-281d-4a84-8632-826134810e66.JPG)
