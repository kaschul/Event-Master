import React from 'react';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './Screens/HomeScreen.js';
import ProductScreen from './Screens/ProductScreen.js';
import CartScreen from './Screens/CartScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import RegisterScreen from './Screens/RegisterScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import ShippingScreen from './Screens/ShippingScreen.js';
import PaymentScreen from './Screens/PaymentScreen.js';
import PlaceOrderScreen from './Screens/PlaceOrderScreen.js';



// arrow function
const App = () => {
  return (
  <>
    <Router>                                                                          {/* enclose in Router to make all components routable */}
        <Header />                
          <main className='py-3'>                                                     {/* create space between header and homescreen  */}
            <Container>
          
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />                       {/* url defined to homescreen '/' means its fixed "exact provides specificity" */}
              <Route path='/product/:id' element={<ProductScreen />} />               {/* : is changing part of URL, element is component you go to */}
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/login' element={<LoginScreen />}/>
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
            </Routes>

            </Container>
          </main>
        <Footer />
      </Router>
      
  </>
  );
}

export default App;
