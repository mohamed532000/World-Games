import { createSlice } from "@reduxjs/toolkit";


let AddToCartWorker = createSlice({
    name : "add-to-cart",
    initialState : [],
    reducers : {
        addProduct : (state , action) =>{
            let productWasAdd = state.find((produc) => produc.id === action.payload.id);

            if(productWasAdd) {
                productWasAdd.quantity += 1
            }else {
                state.push({...action.payload , quantity : 1});
            }
        },
        deleteProduct : (state , action)=>{
            return state.filter(produc => {
                return produc.id !== action.payload.id
            });
        }
    }
});
export let {addProduct , deleteProduct} = AddToCartWorker.actions;
export default AddToCartWorker.reducer;