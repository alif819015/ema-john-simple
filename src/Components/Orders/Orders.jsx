import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItems from "../Review/ReviewItems";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter(product=> product.id !==id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItems key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItems>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
