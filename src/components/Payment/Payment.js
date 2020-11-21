import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from '../../Axios/axios';
import { db } from '../../firebase';

import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from '../Products/CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { getCartTotalPrice } from '../../reducers/reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const Payment = (props) => {
    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret 
        const getClientSecret = async () => {
            try {
                const response = await axios({
                    method: 'post',
                    // stripe expects the total in the min currency subunit
                    url: `/payments/create?total=${Math.round(getCartTotalPrice(cart) * 100)}`
                });
                console.log('response en useEffect', response)
                setClientSecret(response.data.clientSecret);
            }
            catch (error) {
                console.log(error);
            }
        };
        getClientSecret();

    }, [cart]);

    console.log('the secret is', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => {
                // paymentIntent is the payment confirmation
                // save the order in firestore
                console.log('paymentIntent', paymentIntent);
                console.log('user', user);
                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(`${paymentIntent.id}`)
                    .set({
                        cart: cart,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({
                    type: 'EMPTY_THE_CART'
                });
                history.replace('/orders');
            })
        } catch (err) {
            console.log('this is the error', err)
            setProcessing(false);

        }

    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout{' '}{
                        <Link to="/checkout">{cart?.length}{' '}items</Link>
                    }

                </h1>
                {/* adress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Street</p>
                        <p>Some part of the World</p>
                    </div>
                </div>
                {/* items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map((item, i) => (
                            <CheckoutProduct
                                key={`${item.title}${i}`}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h1> Payment Method</h1>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment___priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (

                                        <h3>Order Total: {value}</h3>

                                    )}
                                    decimalScale={2}
                                    value={getCartTotalPrice(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : <p>Buy now</p>}</span>
                                </button>
                            </div>
                        </form>
                        {error && <div>{error}</div>}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment;
