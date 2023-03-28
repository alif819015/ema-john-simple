import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handelAddToCard = props.handelAddToCard;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <h5>Price: {price}</h5>
        <p>Manufacturer : {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        onClick={() => handelAddToCard(props.product)}
        className="btn-card"
      >
        Add to Card
         <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
