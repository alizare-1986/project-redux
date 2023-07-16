const shorten = title =>{
    const splits = title.split(' ')
    const newSplits = `${splits[0]} ${splits[2]}`
    return newSplits
}
const isInCart = (state,id) =>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}
const quantityCount = (state,id)=>{
    const index = state.selectedItems.findIndex(item => item.id === id)
    if(index===-1){
        return false
    }else {
        return state.selectedItems[index].quantity
    }
}
export {shorten,isInCart,quantityCount}