import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const state = useSelector(state => state.cartState)
    return (
        <div style={{display:'flex',justifyContent:'space-between'}} >
        <Link  to={'/products'} >products</Link>
        
       <div style={{ display:'flex', justifyContent:'flex-end'}} >
            <Link to={'/cart'} >shop</Link>
            <span>{state.itemsCounter}</span>
        </div> 
        
        
    </div>
    );
};

export default Navbar;