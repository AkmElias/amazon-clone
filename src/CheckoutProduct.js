import React from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ bascket }, dispatch] = useStateValue();

  const removeFromBascket = () => {
    dispatch({
      type: "REMOVE_FROM_BASCKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBascket}>Remove from bascket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
