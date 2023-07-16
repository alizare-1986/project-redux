import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchProducts from '../redux/products/productsAction';

const ProductsDetails = () => {
    const params = useParams()
    const id = params.id
    const data1 = useSelector(state=> state.productsState.products)
const data = data1[id -1]
    const  dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts(id))
    },[dispatch,id])
    if(!data){
        return <div>loading...</div>
      }
    return (
        <div>
              <img src={data.image} alt='product'/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>category :{data.category}</p>
            <p>{data.price} $</p>
            <Link to={'/products'} >back to shop</Link>
        </div>
    );
};

export default ProductsDetails;