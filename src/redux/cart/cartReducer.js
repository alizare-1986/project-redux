const initialState= {
    selectedItems :[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const sumItems = items =>{
    const itemsCounter = items.reduce((total,product)=> total + product.quantity , 0)
    const total = items.reduce((total,product)=> total+ product.price*product.quantity,0)
    return{itemsCounter,total}
}
const CartReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ITEMS':
            if(!state.selectedItems.find(item=>item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state,
                selectedItems:[...state.selectedItems],
                ...sumItems(state.selectedItems)

            }
            case 'REMOVE_ITEMS':
            const newSelected = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems:[...newSelected],
                ...sumItems(newSelected)
            }
            case 'INCREASE':
                const indexI = state.selectedItems.findIndex(item=>item.id === action.payload.id)
                state.selectedItems[indexI].quantity++
                return{
                    ...state,
                    ...sumItems(state.selectedItems)
                }
                case 'DECREASE':
                const indexD = state.selectedItems.findIndex(item=>item.id === action.payload.id)
                state.selectedItems[indexD].quantity--
                return{
                    ...state,
                    ...sumItems(state.selectedItems)
                }
                case 'CHECKOUT':
                    return{
                        selectedItems :[],
                        itemsCounter:0,
                        total:0,
                        checkout:true
                    }
                    case 'CLEAR':
                        return{
                            selectedItems :[],
                            itemsCounter:0,
                            total:0,
                            checkout:false
                        }
        default:
            return state
    }
}
export default CartReducer