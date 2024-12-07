import { configureStore } from "@reduxjs/toolkit";
import  productReducer from './ProductSlice'
import  CartReducer from './Cartslice'
const store = configureStore({
    reducer :{
        product : productReducer, 
        cart : CartReducer
    }
})

export default store ;