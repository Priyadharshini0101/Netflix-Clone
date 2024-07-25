import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    watchLists :[]
}

export const watchListSlice = createSlice({
    name:'watchList',
    initialState,
    reducers:{
        addWatchList:(state,action)=>{
            console.log(action.payload)
            const watchList = {
                id:nanoid(),
                movie:action.payload.details,
                content:action.payload.content
                
            }
           
            // const index = state.watchLists.findIndex((watchlist) => (watchlist.movie.id === watchList.movie.id))
            // if(index == -1){
             state.watchLists.push(watchList)
            // }
       

        },
        removeWatchList:(state,action) =>{
            state.watchLists = state.watchLists.filter((watchList) => watchList.movie.id !== action.payload)
        }
    }
})

export const {addWatchList,removeWatchList} = watchListSlice.actions
export default watchListSlice.reducer