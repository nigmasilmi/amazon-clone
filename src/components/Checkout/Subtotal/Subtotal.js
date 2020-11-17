import React from 'react';
import './Subtotal.css';
// @ts-ignore 
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../Providers/StateProvider';


const Subtotal = (props) => {
    const [state, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal(0 items):<strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={state.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
};

export default Subtotal;
