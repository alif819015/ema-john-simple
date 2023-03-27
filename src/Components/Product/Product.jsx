import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <h5>Price: {price}</h5>
        <p>Manufacturer : {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="btn-card">Add to Card</button>
    </div>
  );
};

export default Product;
