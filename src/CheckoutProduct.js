import React, { forwardRef } from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ key, id, title, price, rating, image, hideButton }, ref) => {
    const [{ bascket }, dispatch] = useStateValue();
    console.log(ref);
    const removeFromBascket = () => {
      dispatch({
        type: "REMOVE_FROM_BASCKET",
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
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
          {!hideButton && (
            <button onClick={removeFromBascket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
