import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import CartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
    productsState : productsReducer,
    cartState : CartReducer
})
export default rootReducer