import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlice';
import cartItemsReducer from './shopping-cart/cartItemSlice'

export const store = configureStore({
    reducer:{
        productModal: productModalReducer,
        cartItems: cartItemsReducer
    }
})