import React from 'react';
import Cart from './shared/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkout, clear } from '../redux/cart/cartAction';
const ShopCart = () => {
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    return (
        <div>
        <div>
            {
                state.selectedItems.map(product => <Cart key={product.id} productD={product}/>)
            }
        </div>
        <div>
        {state.itemsCounter>0 && 
         <div>
            <p> <span>totals items :</span>{state.itemsCounter}</p>
            <p> <span>totals price :</span>{state.total}</p> 
             <div>
            <button onClick={()=>dispatch(checkout())} >checkout</button>
            <button onClick={()=>dispatch(clear())} >CLEAR</button>
             </div>
         </div>
            }           
              {
                    state.checkout &&
                    <div>
                        <p> checkout succsessfully</p>
                        <Link to={'/products'} >go shop</Link>
                    </div>

                }
                { !state.checkout && state.itemsCounter === 0 &&
                <div>
                     <p>want to bye</p>
                        <Link to={'/products'} >back to shop</Link>
                </div>

                }
       
        </div>
    </div>
    );
};

export default ShopCart;