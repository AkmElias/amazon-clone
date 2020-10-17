import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import "./Subtotal.css";
import { useStateValue } from "../../globalState/StateProvider";
import { getBascketTotal } from "../../globalState/reducer";

function Subtotal() {
  const [{ bascket }] = useStateValue();
  const history = useHistory();
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
        value={getBascketTotal(bascket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proced to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
