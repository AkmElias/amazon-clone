import React from "react";
import FlipMove from "react-flip-move";

import { useStateValue } from "../../globalState/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ user, bascket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="add"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBEJ1GJhII2q0YCM1liyiKCqurTogwcU1ypQ&usqp=CAU"
        />
        <h4>Hello, {user?.email ? user.email : `Guest`} </h4>
        {bascket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your shopping bascket is empty</h2>
            <p>
              You have no items in your bascket. To buy one or more product "Add
              to bascket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping bascket.</h2>
            <FlipMove>
              {bascket?.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      {bascket?.length >= 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
