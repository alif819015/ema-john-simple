import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({product, handleRemoveFromCart}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-items'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price: <span className='price-color'>${price}</span></p>
            <p>Order Quantity: <span className='price-color'>{quantity}</span></p>
           </div>
        <button onClick={()=> handleRemoveFromCart(id)} className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;