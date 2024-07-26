import {configureStore} from '@reduxjs/toolkit'
import watchListReducer from '../features/list/watchListSlice.js'
import languageSlice from '../features/list/languageSlice.js'
import genreSlice from '../features/list/genreSlice.js'

export const store = configureStore({
    reducer:{
        watchList:watchListReducer,
        language:languageSlice,
        genre:genreSlice,
    }


})