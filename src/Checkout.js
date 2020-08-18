import React from "react";

import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ bascket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
        />
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
            {/* list out all of the checkout products */}
            {bascket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
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
}

export default Checkout;
