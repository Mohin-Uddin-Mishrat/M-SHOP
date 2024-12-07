import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    totalPrice : 0,
    totalQuantity : 0,
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addCart(state , action){
            const prd = action.payload
            const isProduct = state.cart.find(product => product.id === prd.id)
            if(isProduct){
                state.totalPrice += prd.price 
                isProduct.subTotalPrice += prd.price
                isProduct.quantity += 1 
            }else{
                state.cart.push({
                    id : prd.id,
                    image :prd.image,
                    name : prd.title ,
                    price : prd.price,
                    subTotalPrice : prd.price,
                    quantity : 1, 
                })
                state.totalPrice += prd.price
                state.totalQuantity += 1
            }
        },
        increamentCart(state, action){
            const id = action.payload
            const product = state.cart.find(prod => prod.id ===  id )
            if(product){
                product.subTotalPrice += product.price
                product.quantity += 1
                state.totalPrice += product.price
            }
        },
        decreamentCart(state, action){
            const id = action.payload
            const product = state.cart.find(prod => prod.id ===  id )
            if(product.quantity > 0){
                product.subTotalPrice -= product.price
                product.quantity -= 1
                state.totalPrice -= product.price
            }
        },
        deleteCart(state, action){
            const cart = action.payload

            state.totalQuantity -= 1
            state.totalPrice -= cart.subTotalPrice
            state.cart = state.cart.filter(prod => prod.id !==  cart.id )
        }
    }
})

export const {addCart , increamentCart , decreamentCart , deleteCart}  = cartSlice.actions
export default cartSlice.reducer