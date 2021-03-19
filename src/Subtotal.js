import React from 'react';
import './Subtotal.css';
import CurrencyFormat from  "react-currency-format";
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const history =  useHistory();  
    const [{basket}] = UseStateValue();
    return (
        <div className="subtotal"> 
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal({basket.length} items):<strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                <input type="checkbox" /> This order contains gift</small>
            </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
             />

            <button onClick={e => history.push('/payment')}>Preceed to checkout</button>
        </div>
    )
}

export default Subtotal
