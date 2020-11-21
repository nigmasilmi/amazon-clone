const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('[secret key]')


///Setting the API///

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API Routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('payment request received for', total);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd'
        });
        console.log('paymentIntent.client_secret', paymentIntent.client_secret);
        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (err) {
        console.log(err);
    }

});

//Listen command
exports.api = functions.https.onRequest(app);

