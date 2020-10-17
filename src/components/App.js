import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "../globalState/StateProvider";
import { auth } from "../firebase/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Header from "./shared/Header";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Login from "./auth/Login";
import Footer from "./shared/Footer";
import Payment from "./checkout/Payment";
import Orders from "./checkout/Orders";

const promise = loadStripe(
  "pk_test_51HQ95EGDqSRH3V7uxJvl8r3mseUdSEPRZONzMMvfWQ3ueSPEidjqs1ZCp2nFbdfEh0rYmL9reca9y9FWy5rUReT60027P8FUMl"
);

function App() {
  const [ dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //cleanup
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
