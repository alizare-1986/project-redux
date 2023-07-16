import React from 'react';
import spinner from '../../gift/spinner.gif'
const Loader = () => {
    return (
        <div style={{textAlign:'center',width:'100%'}}>
            <img src={spinner} alt='spinner' style={{width:100}}/>
        </div>
    );
};

export default Loader;