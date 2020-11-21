import React from 'react';
import { useStateValue } from '../../../Providers/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, img, title, price, rating, hideButton }) => {
    const [state, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={img} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<p key={i}>*</p>))}
                </div>
                {!hideButton && <button onClick={removeFromCart}>Remove from cart</button>}

            </div>
        </div>
    )
}

export default CheckoutProduct;
