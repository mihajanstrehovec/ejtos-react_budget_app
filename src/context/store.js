import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from './AppContextRedux.js'

export const store = configureStore({
    reducer:{
        budget: budgetReducer // result of export default budgetSlicer.reducer in AppContextReducer
    },
})