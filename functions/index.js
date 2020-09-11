const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HQ95EGDqSRH3V7u0bNBpR91jQEFdh7fz9Ti2q4mtv7b0IZTPyrZnP7NZ4gj1TUpBsFawu8LNsmusy8HYz1iSdYX00dspkqchr"
);

//app config
const app = express();

//use middleware
app.use(express.json());
app.use(cors({ origin: true }));

//api roots
app.get("/", (request, response) =>
  response.status(200).send("whats up yoHelllo world")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request receved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});
//listen
exports.api = functions.https.onRequest(app);
//
