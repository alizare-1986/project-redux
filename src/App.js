import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Store from './components/Store';
import { Navigate, Route,  Routes } from 'react-router-dom';
import ProductsDetails from './components/ProductsDetails';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
    <Routes>
      <Route path='/cart' element={<ShopCart/>}/>
      <Route path='/products/:id' element={<ProductsDetails/>}/>
     <Route path='/products' element={<Store/>}/>
     <Route path='/' element={<Navigate to={'/products'}/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
