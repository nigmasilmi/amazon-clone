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
                        id="123"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="1234"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="12345"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="567"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="890"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="1900"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="12t3"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="12gg3"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                    <Product
                        id="1df23"
                        title="DualShock wireless"
                        price="64.99"
                        img="https://res.cloudinary.com/dz3gm9c3w/image/upload/v1605481414/amazon-clone/DualShock4_in3l1c.jpg" alt="DualShock wireless"
                        rating={3}
                    />
                </div>
            </div>

        </div>
    )
}

export default home;
