import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    watchLists :[]
}

export const watchListSlice = createSlice({
    name:'watchList',
    initialState,
    reducers:{
        addWatchList:(state,action)=>{
            const watchList = {
                id:nanoid(),
                movie:action.payload.details,
                content:action.payload.content
                
            }
          
            const index = state.watchLists.findIndex((list) => list.movie.id === watchList.movie.id)
           if(index === -1){
                state.watchLists.push(watchList)
           }
            localStorage.setItem("list",JSON.stringify(state.watchLists))
        },
        removeWatchList:(state,action) =>{
            state.watchLists = state.watchLists.filter((watchList) => watchList.movie.id !== action.payload)
            localStorage.setItem("list",JSON.stringify(state.watchLists))
        },
    }
})

export const {addWatchList,removeWatchList} = watchListSlice.actions
export default watchListSlice.reducer