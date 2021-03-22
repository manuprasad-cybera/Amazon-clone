import { Link, useHistory } from "react-router-dom" 
import React,{ useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct'; 
import './Payment.css';
import { UseStateValue } from './StateProvider';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; 
import CurrencyFormat from "react-currency-format";
import {  getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {

    const [ {basket, user}, dispatch] = UseStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements(); 

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to change a
        const getClientSecret = async () => {
          const response = await axios({ 
              method: 'post',
              // stripes expects the total in a currencies subunites
              url: `/payments/create?total=${getBasketTotal(basket) * 100}` 
          });
          setClientSecret(response.data.clientSecret)  
        }   

        getClientSecret();
    }, [basket]) 

    console.log('the secret is ', clientSecret)
    console.log('👨', user);

    const handleSubmit = async (event) => {
    // stripe stuffs here 
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
             .set({
                 basket: basket,
                 amount: paymentIntent.amount,
                 created: paymentIntent.created
             })

        setSucceeded(true);
        setError(null)
        setProcessing(false)

        dispatch({
            type: 'EMPTY BASKET '
        })

        history.replace('/order')
    })

    }  

    const handleChange = event => {
        // Listen for changesin the elements
        //error in cards details 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout ( <Link to='/checkout'>{basket?.length}</Link>)items</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Deivevery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>SJCE near University</p>
                        <p>Mysuru India</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and dilevery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_pricecontainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Tota: {value}</h3>           
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                             </div>
                        </form> 
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Payment
