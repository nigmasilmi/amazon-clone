import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';
import { useStateValue } from '../../Providers/StateProvider';
import classes from '../Products/Product/Product.module.css';


const CheckOut = (props) => {
    const [state, dispatch] = useStateValue();
    console.log('state', state);
    const myShoppingCart = state.cart.map(item => {

        return (
            <div className={classes.product}>
                <div className={classes.product__info}>
                    <p>{item.title}</p>
                    <p className={classes.product__price}>
                        <small>$</small>
                        <strong>{item.price}</strong>
                    </p>
                </div>
                <img src={item.img} alt={item.title} />
            </div>
        )
    });
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {myShoppingCart}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
};

export default CheckOut;