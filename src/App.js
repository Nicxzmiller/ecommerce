import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Services from './components/Services';
import Invest from './components/Invest';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/invest" component={Invest}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
