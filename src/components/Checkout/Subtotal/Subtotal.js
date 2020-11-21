import React from 'react';
import { useHistory } from 'react-router-dom';

import './Subtotal.css';
// @ts-ignore 
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../Providers/StateProvider';
import { getCartTotalPrice } from '../../../reducers/reducer';

const Subtotal = (props) => {
    const [{ cart }] = useStateValue();
    const history = useHistory()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal({cart.length} items):<strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotalPrice(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payments')}>Proceed to checkout</button>
        </div>
    )
};

export default Subtotal;
