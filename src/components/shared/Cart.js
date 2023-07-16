import React from 'react';
import { shorten } from '../../helper/function';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  decrease, increase, removeItem } from '../../redux/cart/cartAction';
const Cart = ({productD}) => {
    const dispatch = useDispatch()
    return (
        <div>
        <div>
            <img src={productD.image} alt='product' style={{width:200}}/> 
            <h3>{shorten(productD.title)}</h3>
            <p>{productD.price} $</p>
            <p>{productD.quantity}</p>
        </div>
        {productD.quantity >1 ?
        <button onClick={()=>dispatch(decrease(productD))}>-</button> :
        <button onClick={()=>dispatch(removeItem(productD))}>trash</button> 
        }
     <button onClick={()=>dispatch(increase(productD))}>+</button> 
    <div>
        <Link to={`/products/${productD.id}`}  >Detail</Link>
    </div>
    </div>
    );
};

export default Cart;