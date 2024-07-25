import {configureStore} from '@reduxjs/toolkit'
import watchListReducer from '../features/list/watchListSlice.js'
export const store = configureStore({
    reducer: watchListReducer,


})