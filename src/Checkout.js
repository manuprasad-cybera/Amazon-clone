import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { UseStateValue } from './StateProvider'

function checkout() {
    const  [{basket, user }] = UseStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                    <img className="checkout_ads" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt=""/>
                    <div>
                        <h5>Hello, {user?.email}</h5>
                        <h2 className="checkout_title">Your shopping Basket</h2>
                    { basket.map(item => (
                            <CheckoutProduct
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 price={item.price}
                                 rating={item.rating}
                            />
                        ))}
                        
                    </div> 
            </div> 
            <div className="checkout_right">
                <h2><Subtotal /></h2>
            </div>
        </div>
    )
}

export default checkout
