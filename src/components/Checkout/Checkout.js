import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from '../Products/CheckoutProduct/CheckoutProduct';


const CheckOut = (props) => {
    const [state] = useStateValue();
    console.log('state', state);
    const myShoppingCart = state.cart.map((item, i) => {

        return (
            // id, img, title, price, rating
            <CheckoutProduct
                key={item.id + i}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
            />
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