import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './Screens/HomeScreen.js'
import LoginScreen from './Screens/LoginScreen.js'
import ProfileScreen from './Screens/ProfileScreen.js'
import RegisterScreen from './Screens/RegisterScreen.js'
import CartScreen from './Screens/CartScreen.js'
import ProductScreen from './Screens/ProductScreen.js'
import ShippingScreen from './Screens/ShippingScreen.js'
import PaymentScreen from './Screens/PaymentScreen.js'
import PlaceOrderScreen from './Screens/PlaceOrderScreen.js'
import OrderScreen from './Screens/OrderScreen.js'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/order/:id' element={<OrderScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
