import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    searchWord : '',
    filterProduct : [],
    details : {}
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        addProduct(state , action){
            state.products = action.payload
        },
        searchProduct(state , action){
            state.searchWord = action.payload
            state.filterProduct = state.products.filter(product => {
               return  product.title.toLowerCase().includes(state.searchWord.toLowerCase())
            })
        },
        setDetails(state , action){
            state.details = action.payload 
        }
    }
})

export const {addProduct , searchProduct,setDetails}  = productSlice.actions
export default productSlice.reducer