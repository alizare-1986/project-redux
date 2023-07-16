import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './shared/Products';
import fetchProducts from '../redux/products/productsAction';
import Loader from './shared/Loader';


const Store = () => {
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)
    useEffect(()=>{
        dispatch(fetchProducts())

    },[dispatch])
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {
                productsState.loading ?
                <Loader />:
                productsState.error ?
                <p>something went wrong</p> :
                productsState.products.map(product => <Products key={product.id} productData={product}/> )
            }
        </div>
    );
};

export default Store;