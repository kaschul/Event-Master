import React from 'react';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';



// arrow function
const App = () => {
  return (
  <>
   <Router>                                           {/*Make all components routable  */}
      <Header />                
        <main className='py-3'>                       {/*create space between header and homescreen  */}
          <Container>
         
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />                       {/*url defined to homescreen '/' means its fixed "exact provides specificity" */}
            <Route path='/product/:id' element={<ProductScreen />} />               {/* : is changing part of URL, element is component you go to */}
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>

          </Container>
        </main>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
