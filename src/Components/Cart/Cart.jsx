import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart)
  //option 3 {cart} distructure
  // const cart = props.cart; //option 1
  // const {cart} = props; //option 2
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;
for (const product of cart){
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
}

const tax = totalPrice*7/100;

const grandTotal = totalPrice + totalShipping + tax;

  return (
      <div className="cart">
        <h3>Order Summary</h3>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Total Shopping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        <div className="btn-info">
          <button className="btn-1">Clear Cart</button>
          <button className="btn-2">Review Order</button>
        </div>
      </div>
  );
};

export default Cart;
