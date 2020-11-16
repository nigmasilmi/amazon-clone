import React from 'react';
import Product from '../Products/Product/Product';
import classes from './Home.module.css';

const home = (props) => {
    return (
        <div className={classes.home}>
            <div className={classes.home__container}>
                <div className={classes.home__hero}>
                    <img src="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605478937/amazon-clone/Fuji_Tallhero_Dash_en_US_1x._CB418727898__ydxpkz.jpg" alt="amazon hero" />
                </div>

                <div className={classes.home__row}>
                    <Product
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product />
                    <Product />
                </div>
            </div>

        </div>
    )
}

export default home;
