import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../../Products/CheckoutProduct/CheckoutProduct';

const Order = ({ order }) => {
    return (
        <div classname="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map((item, i) => (
                <CheckoutProduct
                    key={item.id + i}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />


        </div>
    )
};

export default Order;
