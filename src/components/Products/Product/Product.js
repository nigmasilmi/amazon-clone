import React from 'react';
import classes from './Product.module.css';
import { useStateValue } from '../../../Providers/StateProvider';

const Product = ({ id, title, img, price, rating }) => {
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img
            }
        })
    }

    return (
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>{title}</p>
                <p className={classes.product__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* image */}
                <div className={classes.product__rating}>
                    {Array(rating).fill().map((_, i) => (<p key={i}>*</p>))}
                </div>
                {/* add to cart */}
            </div>
            <img src={img} alt={title} />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product;
