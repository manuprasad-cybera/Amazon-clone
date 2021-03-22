import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import { auth } from "./firebase";
import { UseStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

function App() {

  const promise = loadStripe("pk_test_51IWNFlLWlIoqcnUs8HPnS3n927ytptcLTAHjQufzVQknDufC3PYoT77TAPFGkHZeW1S4qFgUbQ1i8ZtC51IA31l000lVuVWg0B"); 

  const [{}, dispatch] = UseStateValue();

  useEffect(() => {
    // will only run once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the  user is', authUser);

      if (authUser) {
        //if logged in or was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // logged out
        dispatch({
          type:'SET_USER', 
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/orders"> 
              <Orders />
            </Route>
            <Route path="/login"> 
              <Login />
            </Route>
            <Route path="/checkout">
               <Header/>
                <Checkout />
            </Route>
            <Route path="/payment">
               <Header/>
               <Elements stripe={promise}>
               <Payment />
               </Elements>
            </Route>
            <Route path="/">
               <Header/>
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

