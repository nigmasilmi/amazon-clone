import React from 'react';
import classes from './Product.module.css';

const product = ({ title, img, price, rating }) => {
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
            <button>Add to cart</button>
        </div>
    )
}

export default product;
