import React from 'react';
import { shorten,isInCart,quantityCount } from '../../helper/function';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../../redux/cart/cartAction';

const Products = ({productData}) => {
    
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    return (
        <div>
             <div>
            <img  src={productData.image} alt='product' style={{width:200}}/>
            <h2>{shorten(productData.title)}</h2>
            <p>{`${productData.price}$`}</p>
            <Link to={`/products/${productData.id}`}>Details</Link>
             </div>
          <div>
          {quantityCount(state,productData.id)===1 && <button onClick={()=>dispatch(removeItem(productData))} >trash</button> }
          {quantityCount(state,productData.id)>1 && <button onClick={()=>dispatch(decrease(productData))} >-</button> }
          {quantityCount(state,productData.id)>0 && <span>{quantityCount(state,productData.id)}</span> }
          {isInCart(state,productData.id) ?
          <button onClick={()=>dispatch(increase(productData))} >+</button>:
          <button onClick={()=>dispatch(addItem(productData))} >buy</button>

          }
         </div>
       <div>
       <Link to={'/cart'} >shop</Link>
       </div>
       </div>
    );
};

export default Products;