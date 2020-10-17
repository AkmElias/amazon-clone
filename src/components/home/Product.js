import React from "react";

import "./Product.css";
import { useStateValue } from "../../globalState/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [dispatch] = useStateValue();
  const addToBacket = () => {
    dispatch({
      type: "ADD_TO_BASCKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="image" />
      <button onClick={addToBacket}>Add to bascket</button>
    </div>
  );
}

export default Product;
