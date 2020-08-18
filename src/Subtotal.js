import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBascketTotal } from "./reducer";

function Subtotal() {
  const [{ bascket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({bascket?.length} items) :{" "}
              <strong>{` $ ${getBascketTotal(bascket)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift.
            </small>
          </div>
        )}
        decimalScale={2}
        displayType={"text"}
        thousanSeparator={true}
        prefix={"$"}
      />
      <button>Proced to Checkout</button>
    </div>
  );
}

export default Subtotal;
