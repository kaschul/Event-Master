# EventMaster 

- Ecommerce App
- MongoDB, Express, React, Node
- Deployed to Heroku at
https://fierce-badlands-94639.herokuapp.com/
- Video of website presentation at 
https://youtu.be/moR-Q3FsRkY

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
- Mongoose used to interface with MongoDB
```js
import mongoose from 'mongoose'
const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } //... (code omitted for example) ...
```
![eventmaster1](https://user-images.githubusercontent.com/47723396/183946341-d0a7fc70-47e5-4927-b3b1-84dd9799b541.JPG)

## Product details
- Product details page shows the details of an event and lets you add tickets to your cart
- If no tickets are available, 'Add to Cart' button is disabled
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
- Cart page shows you the products currently added to the cart and lets you proceed to checkout
- If cart is empty, message and link to product list is displayed, and checkout button is disabled
```js
{cartItems.length === 0 ? (
  <Message> 
    Your cart is empty <Link to='/'>Go Back</Link>
  </Message>
) // ... (code omitted for example) ...
```
- Cart summary shows total number of items as well as total cost
```js
<h2>
  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
</h2>
${cartItems
  .reduce((acc, item) => acc + item.qty * item.price, 0)
  .toFixed(2)}
```

![eventmaster3](https://user-images.githubusercontent.com/47723396/183946430-6a73728d-6ed6-4047-b757-eb5c124f40fd.JPG)

## Shipping
- After signing in or creating an account, you can enter your shipping address
- Bootstrap used for form controls
```js
const submitHandler = (e) => {
  e.preventDefault()
  dispatch(saveShippingAddress({ address, city, postalCode, country }))
  navigate('/payment')
}
// ... (code omitted for example) ...
  <Form onSubmit={submitHandler}>
    <Form.Group controlId='address'>
      <Form.Label>Address</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter address'
        value={address}
        required
        onChange={(e) => setAddress(e.target.value)}
      ></Form.Control>
    </Form.Group>   // ... (etc)
```
- Checkout steps are defined, so you cannot progress to the next step until the current step is completed
```js
// Step 1: Sign In,  Step 2: Shipping,  Step 3: Payment,  Step 4: Place Order
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return(
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>   // ... (etc)
```
![eventmaster4](https://user-images.githubusercontent.com/47723396/183947909-7b171a81-8a79-462b-bc5f-bdcde6b5c1b0.JPG)

## Checkout
- Checkout is handled via PayPal integration, either with a PayPal account or a credit card
```js
const [paymentMethod, setPaymentMethod] = useState('PayPal')
```
![eventmaster5](https://user-images.githubusercontent.com/47723396/183946456-21a282f7-2ae7-403e-9edc-e0ed8c4d600f.JPG)

## Order Summary
- The order page page displays the shipping address, the payment method, and the items ordered (along with the quantity and price of each item)
```js
{cart.cartItems.map((item, index) => (
// ... (code omitted for example) ...
   <Image src={item.image} alt={item.name} fluid rounded />
   // ... (code omitted for example) ...
   <Link to={`/product/${item.product}`}> {item.name} </Link>
   // ... (code omitted for example) ...
   <>{item.qty} x ${item.price} = ${addDecimals(item.qty * item.price)}</>
   // ... (code omitted for example) ...
```
- The order summary includes the total cost after taxes and fees, along with a cost breakdown
```js
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}
cart.itemsPrice = addDecimals(
  cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
)
cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10)
cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
cart.totalPrice = (
  Number(cart.itemsPrice) +
  Number(cart.shippingPrice) +
  Number(cart.taxPrice)
).toFixed(2)
```
![eventmaster6](https://user-images.githubusercontent.com/47723396/183946465-48905963-3cce-44cf-b83d-4630d81151c0.JPG)

## Order Status
- after confirming the order, the order summary page displays the status of the order
```js
{order.isDelivered ? (
  <Message variant='success'> Delivered on {order.deliveredAt} </Message>
) : (
  <Message variant='danger'> Not Delivered </Message>
)}
```
![eventmaster7](https://user-images.githubusercontent.com/47723396/183946552-d5bb3066-52a6-4f17-896d-4208ce1dfa53.JPG)
## PayPal Integration
- Payment is handled via PayPal integration
```js
const addPayPalScript = async () => {
  const { data: clientId } = await axios.get('/api/config/paypal')
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
  script.async = true
  script.onload = () => { setSdkReady(true) }
  document.body.appendChild(script)
}
```
- The PayPal button is only displayed until the order has been paid
```js
const [sdkReady, setSdkReady] = useState(false)
const orderPay = useSelector((state) => state.orderPay)
const { loading: loadingPay, success: successPay } = orderPay 
// ... (code omitted for example) ...

  if (!order || successPay) {
    dispatch({ type: ORDER_PAY_RESET })
    dispatch(getOrderDetails(orderId))
  } else if (!order.isPaid) {
    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
  }   // ... (code omitted for example) ...
```
![eventmaster9](https://user-images.githubusercontent.com/47723396/183946870-225762fb-4dda-4425-932d-82666f08a2d0.JPG)

## Order Summary
- After payment is complete, the order summary page is updated
```js
const successPaymentHandler = (paymentResult) => {
  dispatch(payOrder(orderId, paymentResult))
}
```

![eventmaster10](https://user-images.githubusercontent.com/47723396/183946886-1cc085ee-e606-4f0a-b49f-aca4005ec970.JPG)

## New User
- User accounts have the functionality to track your orders and save your shipping and payment information
- If you do not have a profile, you will be prompted to create a new account before submitting an order
```js
if (!userInfo) {
  navigate('/login')
} else {
  if (!user.name) {
    dispatch(getUserDetails('profile'))
    dispatch(listMyOrders())
  } else {
    setName(user.name)
    setEmail(user.email)
  }
}
```
![eventmaster11](https://user-images.githubusercontent.com/47723396/183946897-976d5816-281d-4a84-8632-826134810e66.JPG)
