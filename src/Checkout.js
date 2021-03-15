import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                    <img className="checkout_ads" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt=""/>
                    <div>
                        <h2 className="checkout_title">Your shopping Basket</h2>
                    </div>
            </div> 
            <div className="checkout_right">
                <h2><Subtotal /></h2>
            </div>
        </div>
    )
}

export default checkout
