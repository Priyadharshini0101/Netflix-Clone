import {configureStore} from '@reduxjs/toolkit'
import watchListReducer from './watchListSlice.js'
import languageSlice from './languageSlice.js'
import genreSlice from './genreSlice.js'

export const store = configureStore({
    reducer:{
        watchList:watchListReducer,
        language:languageSlice,
        genre:genreSlice,
    }


})