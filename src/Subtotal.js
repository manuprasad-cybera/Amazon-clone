import React from 'react';
import './Subtotal.css';
import CurrencyFormat from  "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal(0 items):<strong>0</strong>
                </p>
                <small className="subtotal_gift">
                <input type="checkbox" /> This order contains gift</small>
            </>
             )}
             decimalScale={2}
             value={0}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"£"}
             />

            <button>Preceed to checkout</button>
        </div>
    )
}

export default Subtotal
