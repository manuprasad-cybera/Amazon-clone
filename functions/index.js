const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")('sk_test_51IWNFlLWlIoqcnUssyY1Ct0BQwx3VJmGQcZjTm4AYbvCeN2ZBedQDGl6dSzm2b8INqLSl6cz4ffFgqDrtM8kEw8F00h2ydvsOd')


//API

// -APP Comfig

const app = express();

// - Middelwares

app.use(cors({ origin : true }));
app.use(express.json()); 

//-API routes

 app.get('/', (request, response) => response.status(200).send('hello world'))

 app.post('/payments/create', async (request, response) => {
     const total = request.query.total;

     console.log('payment recived total of ', total);

     const paymentIntent = await stripe.paymentIntents.create({
         amount: total, //sub units of the currency 
        currency: "usd",

     });

     //OK -Created  
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    })

 })

//Listen Commands

exports.api = functions.https.onRequest(app)