import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ bascket }] = useStateValue();
  return (
    <div className="subtotal">
      <button>Proced to Checkout</button>
    </div>
  );
}

export default Subtotal;
